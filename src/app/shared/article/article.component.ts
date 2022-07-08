import { Component, Input, OnInit } from '@angular/core';

export interface article {
  title: string;
  description: string;
  image: string;
  publicationDate: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}
  @Input() article: any = {};

  parsedArticle: article = {
    title: '',
    description: '',
    image: '',
    publicationDate: '',
  };
  ngOnInit(): void {
    console.log(this.article);
    this.parsedArticle = {
      title: this.article.fields.title,
      description: this.article.fields.description,
      image: this.article.fields.background
        ? this.article.fields.background.fields.file.url
        : '',
      publicationDate: this.article.fields.publicationDate,
    };
  }
}
