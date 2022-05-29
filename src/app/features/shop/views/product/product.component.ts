import { Component, OnInit } from '@angular/core';
import { CardProduct } from '../../../../shared/interfaces/card-product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  readonly products: CardProduct[] = [
    {
      image: 'assets/images/product-1.png',
      name: 'Fresh Coffee',
      score: 2.5,
      price: 16,
      beforePrice: 19
    },
    {
      image: 'assets/images/product-2.png',
      name: 'Fresh Coffee 2',
      score: 3.5,
      price: 19,
      beforePrice: 25
    },
    {
      image: 'assets/images/product-3.png',
      name: 'Fresh Coffee 3',
      score: 5,
      price: 29,
      beforePrice: 50
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
