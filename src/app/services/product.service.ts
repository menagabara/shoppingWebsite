import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();

  private products: Product[] = [
    new Product(1,'Nikon D7200',10000,4.4,'Digital camera from Nikon',"https://www.bhphotovideo.com/images/images2500x2500/nikon_1555_d7200_dslr_camera_with_1127272.jpg"),
    new Product(2,'Nikon D810',8000,3.6,'Digital camera from Nikon',"https://file.digi-kala.com/digikala/image/webstore/product/p_98691/original/digital-camera-nikon-d810-kit-24-120-4g-vr638b50.jpg")
  ]
  
  getProduct() {
    return this.products.slice();
  }
  
}
