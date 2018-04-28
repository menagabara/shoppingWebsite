import { EventEmitter, Injectable } from '@angular/core';
import { SubCategory } from '../models/subCategory.model';


@Injectable()
export class SubCategoryService {
  subCategorySelected = new EventEmitter<SubCategory>();

  private subCategories: SubCategory[] = [
    new SubCategory(1,'Analogue Cameras'),
    new SubCategory(2,'Digital Cameras'),
    new SubCategory(3,'Camera Bags')
  ]
  
  getSubCategories() {
    return this.subCategories.slice();
  }
  
}
