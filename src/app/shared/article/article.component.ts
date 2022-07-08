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
  @Input() article: any = {};

  ngOnInit(): void {
    if (this.article !== undefined) {
      console.log(this.article.fields.background.fields.file.url);
    }
  }
}
