import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './menu/burger/burger.component';
import { MenuComponent } from './menu/menu.component';
import { TopScrollerComponent } from './menu/top-scroller/top-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BurgerComponent,
    TopScrollerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
