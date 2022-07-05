import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './shared/burger/burger.component';
import { MenuComponent } from './menu/menu.component';
import { TopScrollerComponent } from './shared/top-scroller/top-scroller.component';
import { ArticleComponent } from './shared/article/article.component';
import { ArticlesDisplayerComponent } from './shared/articles-displayer/articles-displayer.component';
import { ContentfulService } from './services/contentful.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BurgerComponent,
    TopScrollerComponent,
    ArticleComponent,
    ArticlesDisplayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
