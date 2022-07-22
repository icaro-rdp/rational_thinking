import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface article {
  title: string;
  content: string;
  publicationDate: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() article: any = {};

  parsedArticle: any;
  ngOnInit(): void {
    this.parsedArticle = this.createArticle(this.article);
  }

  getTitle(article: any): string {
    return article.fields.title;
  }
  getDescription(article: any): string {
    return article.fields.description;
  }
  getArticleId(article: any): string {
    return article.sys.id;
  }
  getArticleImage(article: any): string {
    // check if obj has fields property
    if (!article.fields.background) {
      return '';
    }
    return article.fields.background.fields.file.url;
  }
  getArticleDate(article: any): string {
    return article.fields.publicationDate;
  }

  // function that create artcle object using monad function
  createArticle(article: any): article {
    return {
      title: this.getTitle(article),
      content: this.getDescription(article),
      image: this.getArticleImage(article),
      publicationDate: this.getArticleDate(article),
      id: this.getArticleId(article),
    };
  }

  // change route to article details page
  changeRoute(id: string) {
    this.router.navigate(['/article', id]);
  }
}
