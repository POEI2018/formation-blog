import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  articles: Array<Article>;
  showList: boolean;
  editArticle: Article;

  constructor() {
    this.showList = true;
    this.articles = new Array();
    this.title = 'Bienvenu sur mon blog realisé avec angular 6.0.3 !';
  }

  handleCreate(article: Article) {
    this.articles.push(article);
    this.showList = true;

  }

  handleDelete(id: number) {
    this.updateList(id);
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

