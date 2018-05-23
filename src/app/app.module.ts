import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import { AppComponent, AppheaderComponent, AppfooterComponent,
  AppmenuComponent, AppsettingComponent, CategoryComponent,
  QuestionComponent, TagComponent } from './components';
import { CategoryService, QuestionService, TagService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CategoryService, QuestionService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
