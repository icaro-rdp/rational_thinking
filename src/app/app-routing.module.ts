import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu/menu.component';
import { ArticleDetailsComponent } from './home/articles-displayer/article/article-details/article-details.component';
import { ArticlesDisplayerComponent } from './home/articles-displayer/articles-displayer.component';

const routes: Routes = [
  { path: 'home', component: ArticlesDisplayerComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
