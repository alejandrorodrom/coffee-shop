import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProduct(): Observable<ProductModel[]> {
    return this.http
      .get<Product[]>('products')
      .pipe(
        map(
          value => value.map(product => new ProductModel(product))
        )
      );
  }
}
