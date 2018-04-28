import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})

export class OneCategoryComponent implements OnInit {
  @Input() category: Category

  constructor(private catService: CategoryService) { }

  ngOnInit() {
  }

  //get the selected category.
  onSelected(){
    this.catService.categorySelected.emit(this.category)
  }

}
