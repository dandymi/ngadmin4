import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from './../../model';
import { CategoryService } from '../../services';

@Component({
  selector: 'category-list',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: Category[];
  sub: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
                .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
