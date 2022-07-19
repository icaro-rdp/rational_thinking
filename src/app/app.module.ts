import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './home/articles-displayer/article/article-details/article-details.component';
import { ArticleComponent } from './home/articles-displayer/article/article.component';
import { MarkedPipe } from './home/articles-displayer/article/marked.pipe';
import { ArticlesDisplayerComponent } from './home/articles-displayer/articles-displayer.component';
import { MenuComponent } from './home/menu/menu.component';
import { ContentfulService } from './services/contentful.service';
import { BurgerComponent } from './shared/burger/burger.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TopScrollerComponent } from './shared/top-scroller/top-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BurgerComponent,
    TopScrollerComponent,
    ArticleComponent,
    ArticlesDisplayerComponent,
    SpinnerComponent,
    ArticleDetailsComponent,
    MarkedPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
