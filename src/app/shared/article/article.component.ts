import { Component, Input } from '@angular/core';

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
export class ArticleComponent {
  constructor() {}
  @Input() article: article = {
    title: '',
    description: '',
    image: '',
    link: '',
  };
}
