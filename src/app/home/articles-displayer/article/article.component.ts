import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() article: any = {};

  parsedArticle: any = {};
  ngOnInit(): void {
    this.parsedArticle = {
      title: this.article.fields.title,
      description: this.article.fields.description,
      image: this.article.fields.background
        ? this.article.fields.background.fields.file.url
        : '',
      publicationDate: this.article.fields.publicationDate,
      id: this.article.sys.id,
    };
  }
  // change route to article details page
  changeRoute(id: string) {
    console.log(id);
    this.router.navigate(['/articles', id]);
  }
}
