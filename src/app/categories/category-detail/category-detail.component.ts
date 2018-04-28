import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { SubCategory } from '../../models/subCategory.model';
import { SubCategoryService } from '../../services/subCategory.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})

export class CategoryDetailComponent implements OnInit {
  category: Category
  id: number  

  selectedSubCategory : SubCategory

  constructor(
    private catservice: CategoryService,
    private route: ActivatedRoute,
    private subCatService : SubCategoryService
  ) { }
  
  
 
  ngOnInit() {
     //update route.
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'] //convert string to int.
        this.category = this.catservice.getCatId(this.id)
      }
    )
     //load and update subcategory.
    this.subCatService.subCategorySelected.subscribe(
        (subCategory: SubCategory) => {
          this.selectedSubCategory = subCategory
        }
      )
  }
    
}
