import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rational_thinking';
  menuStatus: boolean = false;
  dark: boolean = this.isDarkMode();
  // check if darkmode is enabled
  isDarkMode(): boolean {
    // event listener on perfers-colors-web-component and set dark mode
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true;
    }
    return false;
  }

  // open and close burger menu
  openMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
