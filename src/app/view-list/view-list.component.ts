import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
	selector: 'blog-view-list',
	templateUrl: './view-list.component.html',
	styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
	articles: Array<Article>;

	constructor(private articleService: ArticleService, private router:Router) {
		this.articles = new Array();
	}

	ngOnInit() {
		this.articleService.list()
			.subscribe((list) => this.articles = list);
  }
  
  delete() {

  }

  edit(id: number) {
    this.router.navigate(['edit'], {
       queryParams: {
         id: id 
      }
    });

  }

}