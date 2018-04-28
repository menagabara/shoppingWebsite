import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../../../models/subCategory.model';
import { SubCategoryService } from '../../../services/subCategory.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sub-catgory-detail',
  templateUrl: './sub-catgory-detail.component.html',
  styleUrls: ['./sub-catgory-detail.component.css'],
})

export class SubCatgoryDetailComponent implements OnInit {
  subCategory : SubCategory
  id: number

  selectedProduct : Product

  constructor(
    private subCatService : SubCategoryService,
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //load and update product.
  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.subCategory = this.subCatService.getSubCatId(this.id);
        }
      )

    this.productService.productSelected.subscribe(
      (product:Product) => {
        this.selectedProduct = product
      }
    )
  }

}
