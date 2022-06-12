import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../http/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel[]> {

  constructor(
    private productService: ProductService
  ) {
  }

  resolve(): Observable<ProductModel[]> {
    return this.productService.getProduct();
  }
}
