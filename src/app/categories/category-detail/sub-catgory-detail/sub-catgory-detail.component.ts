import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from '../../../models/subCategory.model';
import { SubCategoryService } from '../../../services/subCategory.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-sub-catgory-detail',
  templateUrl: './sub-catgory-detail.component.html',
  styleUrls: ['./sub-catgory-detail.component.css'],
})

export class SubCatgoryDetailComponent implements OnInit {
  @Input() subCategory : SubCategory

  selectedProduct : Product

  constructor(
    private subCatService : SubCategoryService,
    private productService : ProductService
  ) { }

  //load and update product.
  ngOnInit() {
    this.productService.productSelected.subscribe(
      (product:Product) => {
        this.selectedProduct = product
      }
    )
  }



}
