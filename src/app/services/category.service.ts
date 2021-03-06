import { EventEmitter, Injectable } from '@angular/core';
import { Category } from '../models/category.model';


@Injectable()
export class CategoryService {
  categorySelected = new EventEmitter<Category>();

  private categories: Category[] = [
    new Category(1,'Cameras'),
    new Category(2,'Electronics'),
    new Category(3,'Computers, IT & Networking')
  ]
  
  getCategories() {
    //only copy of the list.
    return this.categories.slice();
  }

  getCatId(id:number){
    return this.categories[id]
  }
  
}
