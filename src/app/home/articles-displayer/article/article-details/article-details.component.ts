import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { gsap } from 'gsap';

interface DetailedArticle {
  title: string;
  content: string;
  isNew: boolean;
  description: string;
  image: {
    url: string;
    description: string;
  };
}
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();
  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) {}

  article$: Observable<any> | undefined;

  article: DetailedArticle = {
    title: '',
    content: '',
    description: '',
    isNew: false,
    image: { url: '', description: '' },
  };

  // function that create artcle object using monad function
  createDetailedArticle(article: any): DetailedArticle {
    return {
      title: article.fields.title,
      content: article.fields.content,
      description: article.fields.description,
      isNew: true,
      image: {
        url: !article.fields.background
          ? ''
          : article.fields.background.fields.file.url,
        description: !article.fields.background
          ? ''
          : article.fields.background.fields.description,
      },
    };
  }
  _returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  ngOnInit() {
    let params = this.activatedRoute.snapshot.params;
    this.article$ = this.contentfulService.getEntry(params['id']);

    this.article$.pipe(takeUntil(this.onDestroy)).subscribe((article) => {
      this.article = this.createDetailedArticle(article);
    });
  }
  ngOnDestroy() {
    this.onDestroy.next();
  }
}
