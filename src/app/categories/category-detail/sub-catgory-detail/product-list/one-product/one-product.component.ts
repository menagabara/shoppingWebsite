import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})

export class OneProductComponent implements OnInit {
  @Input() product: Product
  @Input() id: number

  ngOnInit() {
  }

}
