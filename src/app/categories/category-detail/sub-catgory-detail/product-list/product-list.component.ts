import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products : Product[]

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = this.productService.getProduct()
  }

}
