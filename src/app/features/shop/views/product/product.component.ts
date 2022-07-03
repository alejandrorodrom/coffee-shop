import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../shared/interfaces/item.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.products = data);
  }

  addCart(product: Item): void {
    console.log(product);
  }

}
