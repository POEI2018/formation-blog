import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  articles: Array<Article>;
  showList: boolean;
  editArticle: Article;

  constructor(private articleService:ArticleService) {
    this.showList = true;
    this.articles = new Array();
    this.title = 'Bienvenu sur mon blog realisé avec angular 6.0.3 !';
  }

 ngOnInit(){
  this.articleService.list().subscribe((list) => this.articles = list);
 }

  handleCreate(article: Article) {
    this.articleService.create(article)
			.subscribe({
				next: (newArticle) => console.log(`Article ${newArticle} créé !`),
				error: (errorMessage) => console.log(`Impossible de créer l'article ${article} : ${errorMessage}`),
				complete: () => console.log('Création du nouvel article terminée avec succès !')
			});
    this.showList = true;

  }

  handleDelete(id: number) {
    this.articleService.delete(id)
			.subscribe({
				complete: () => console.log(`Article d'id ${id} supprimé avec succès`),
				error: (message) => console.log(`Impossible de supprimer l'article : ${message}`)
		});
  }

  handleUpdate(article: Article) {
    this.updateList(article.id, article);
    this.editArticle = undefined;
    this.showList = true;
  }

  showEdit(id: number) {
    this.editArticle = this.articles.find((a) => a.id === id);
    this.showList = false;
  }

  private updateList(id: number, article?: Article) {
    let index = this.articles.findIndex((truc) => truc.id === id);
    if (index >= 0) {
      if (article) {
        this.articles.splice(index, 1, article);
      } else {
        this.articles.splice(index, 1);
      }
    }
  }

}

