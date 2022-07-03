import { Component, OnInit } from '@angular/core';
import { CartStore } from '../../../../shared/stores/cart/cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];
  dataSource: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }[] = [];

  total = 0;

  constructor(
    private cartStore: CartStore
  ) {
    console.log(this.cartStore.state);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataSource = this.cartStore.state.items.map(item => {
      const totalPrice = item.quantity * item.price;
      this.total = this.total + totalPrice;
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: totalPrice
      }
    });
  }

}
