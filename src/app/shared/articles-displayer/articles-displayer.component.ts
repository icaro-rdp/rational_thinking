import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-articles-displayer',
  templateUrl: './articles-displayer.component.html',
  styleUrls: ['./articles-displayer.component.scss'],
})
export class ArticlesDisplayerComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  articles$: Observable<any> | undefined;
  ngOnInit(): void {
    this.articles$ = this.contentfulService.getAllEntries() as Observable<any>;
  }
}
