import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-articles-displayer',
  templateUrl: './articles-displayer.component.html',
  styleUrls: ['./articles-displayer.component.scss'],
})
export class ArticlesDisplayerComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  articles: any;
  ngOnInit(): void {
    this.articles = this.contentfulService.getAllEntries().then((response) => {
      console.log(response);
      return response;
    });
  }
}
