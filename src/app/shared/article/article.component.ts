import { Component, Input, OnInit } from '@angular/core';

export interface article {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}
  @Input() article: article = {
    title: 'Come funziona il Cervello',
    description: 'Questa è la prova di un articolo sul cervello',
    image:
      'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    link: 'https://www.google.com/',
  };

  ngOnInit(): void {
    console.log(this.article);
  }
}
