import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() articles:Array<Article> ;

  constructor() {
    this.articles=new Array() ;
   }

  ngOnInit() {
  }

}
