import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rational_thinking';
  menuStatus: boolean = false;

  // open and close burger menu
  openMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
