import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../shared/interfaces/item.interface';
import { CartService } from '../../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.products = data);
  }

  addCart(product: Item): void {
    // this.cartService.addCart(product);
    this.cartService.addCartNgxs(product);
  }

}
