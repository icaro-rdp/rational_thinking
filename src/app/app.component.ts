import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rational_thinking';
  navbar_background = '../assets/images/navbar.jpg';
  menuStatus: boolean = false;

  // open and close burger menu
  openMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
