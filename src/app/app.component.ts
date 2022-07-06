import { Component } from '@angular/core';
import { article } from './shared/article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rational_thinking';
  navbar_background = '../assets/images/navbar.jpg';
  menuStatus: boolean = false;

  articles: article[] = [
    {
      title: 'Angular 8',
      description:
        'Angular 8 is a complete rewrite of the AngularJS framework.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://angular.io/',
    },
    {
      title: 'Angular Material',
      description:
        'The Angular Material library is a complete set of components for building a complete user interface with a Material Design look and feel.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://material.angular.io/',
    },
    {
      title: 'Angular Router',
      description: 'The Angular Router is a routing framework for Angular.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://angular.io/guide/router',
    },
    {
      title: 'Angular 8',
      description:
        'Angular 8 is a complete rewrite of the AngularJS framework.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://angular.io/',
    },
    {
      title: 'Angular Material',
      description:
        'The Angular Material library is a complete set of components for building a complete user interface with a Material Design look and feel.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://material.angular.io/',
    },
    {
      title: 'Angular Router',
      description: 'The Angular Router is a routing framework for Angular.',
      image: '../assets/images/connettoma.jpg',
      link: 'https://angular.io/guide/router',
    },
  ];
  // open and close burger menu
  openMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
