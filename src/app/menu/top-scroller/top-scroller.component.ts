import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-scroller',
  templateUrl: './top-scroller.component.html',
  styleUrls: ['./top-scroller.component.scss'],
})
export class TopScrollerComponent {
  constructor() {}

  isScrolled: boolean = false;
  // function to check if page is scrolled
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  // funtion to scroll to top of page
  scrollToTop() {
    // smooth scroll top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } // end scrollToTop
} // end TopScrollerComponent
