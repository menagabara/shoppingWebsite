import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories: Category[]

  constructor(
    private catService: CategoryService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.categories = this.catService.getCategories()
  }

}
