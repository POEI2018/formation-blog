import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  article:Article;
  @Output() onCreate: EventEmitter<Article>;  

  constructor() { 
    this.article = new Article() ;
    this.onCreate = new EventEmitter() ;
  }


  ngOnInit() {
  }

  submit(form:NgForm){
     this.onCreate.emit(this.article);
  }

}
