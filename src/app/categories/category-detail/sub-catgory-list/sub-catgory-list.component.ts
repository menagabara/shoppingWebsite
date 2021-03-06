import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubCategory } from '../../../models/subCategory.model';
import { SubCategoryService } from '../../../services/subCategory.service';

@Component({
  selector: 'app-sub-catgory-list',
  templateUrl: './sub-catgory-list.component.html',
  styleUrls: ['./sub-catgory-list.component.css'],

})

export class SubCatgoryListComponent implements OnInit {
  subCategories: SubCategory[]

  constructor(
    private subCatService: SubCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subCategories = this.subCatService.getSubCategories()
  }

}
