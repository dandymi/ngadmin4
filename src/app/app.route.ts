import { AppComponent } from './components/app.component';
import { Routes } from '@angular/router';
import { CategoryComponent, TagComponent, QuestionComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'tags',
    component: TagComponent
  },
  {
    path: 'questions',
    component: QuestionComponent
  }
];

