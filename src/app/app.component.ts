import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  articles:Array<Article> ;

  constructor(){
    this.articles = new Array() ;
    this.title='Bienvenu sur mon blog realisé avec angular 6.0.3';
  }

  handleCreate(article:Article){
     this.articles.push(article);
     console.log('Un article est crée', article)

  }
  
}

