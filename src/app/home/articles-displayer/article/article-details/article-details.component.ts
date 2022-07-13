import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) {}

  article$: Observable<any> | undefined;
  article: any = {};
  ngOnInit() {
    let params = this.activatedRoute.snapshot.params;
    this.article$ = this.contentfulService.getEntry(params['id']);
    this.article$.subscribe((article) => {
      console.log(article);
      this.article = article;
    });
  }
}
