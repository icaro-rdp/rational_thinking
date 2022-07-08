import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlesDisplayerComponent } from './shared/articles-displayer/articles-displayer.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'articles', component: ArticlesDisplayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
