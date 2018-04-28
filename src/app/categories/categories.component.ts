import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  selectedCategory: Category

  constructor(private catService: CategoryService) {}
    
  //load category.
  ngOnInit() {
    this.catService.categorySelected.subscribe(
      (category: Category) => {
        this.selectedCategory = category
      }
    )
  }

}
