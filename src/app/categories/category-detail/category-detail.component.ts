import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { SubCategory } from '../../models/subCategory.model';
import { SubCategoryService } from '../../services/subCategory.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})

export class CategoryDetailComponent implements OnInit {
  @Input() category: Category
  
  selectedSubCategory : SubCategory

  constructor(
    private catservice: CategoryService,
    private subCatService : SubCategoryService
  ) { }
  
  
  //load and update subcategory.
  ngOnInit() {
    this.subCatService.subCategorySelected.subscribe(
        (subCategory: SubCategory) => {
          this.selectedSubCategory = subCategory
          
        }
      )
  }
    
}
