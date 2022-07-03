import { Component, OnInit } from '@angular/core';
import { CartStore } from '../../../../shared/stores/cart/cart.store';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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

  items: FormArray = this.formBuilder.array([]);
  form: FormGroup = this.formBuilder.group({ items: this.items });

  total = 0;

  constructor(
    private cartStore: CartStore,
    private formBuilder: FormBuilder
  ) {
    console.log(this.cartStore.state);
  }

  ngOnInit(): void {
    this.cartStore.state.items.forEach(value => {
      this.items.push(this.formBuilder.group({ quantity: [ value.quantity, [] ] }))
    });

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
