import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories=[1,2,4]

  constructor() { }

  ngOnInit() {
  }

}
