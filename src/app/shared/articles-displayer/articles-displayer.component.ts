import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-articles-displayer',
  templateUrl: './articles-displayer.component.html',
  styleUrls: ['./articles-displayer.component.scss'],
})
export class ArticlesDisplayerComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  results$: Observable<any> | undefined;

  ngOnInit(): void {
    this.results$ = this.contentfulService.getAllEntries();
  }
}
