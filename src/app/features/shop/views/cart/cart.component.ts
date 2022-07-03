import { Component, OnInit } from '@angular/core';
import { CartStore } from '../../../../shared/stores/cart/cart.store';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Store } from '@ngxs/store';
import { Item } from '../../../../shared/interfaces/item.interface';
import {
  CartDeleteActionNgxs,
  CartSetAllActionNgxs,
  CartUpdateActionNgxs
} from '../../../../shared/stores/cart-ngxs/cart-ngxs.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'quantity', 'total', 'options'];
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
    private store: Store,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    // this.cartStore.state.items.forEach(value => {
    //   this.items.push(this.formBuilder.group({ id: [ value.id, [] ], quantity: [ value.quantity, [] ] }))
    // });

    this.store.selectSnapshot(state => state.cart.items).forEach((value: { id: any; quantity: any; }) => {
      this.items.push(this.formBuilder.group({ id: [ value.id, [] ], quantity: [ value.quantity, [] ] }))
    });

    this.loadData();

    // this.items.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe((value: { id: number, quantity: number }[]) => {
    //     this.cartStore.state.items.forEach(elem => {
    //       const formItem = value.find(v => v.id === elem.id);
    //       if (elem.quantity !== formItem!.quantity) {
    //         this.cartStore.dispatch(new CartUpdateAction({
    //           id: elem.id, item: {
    //             ...elem,
    //             quantity: formItem!.quantity
    //           }
    //         }))
    //         this.loadData();
    //       }
    //     });
    //   });

    this.items.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((value: { id: number, quantity: number }[]) => {
        this.store.selectSnapshot(state => state.cart.items).forEach((elem: Item) => {
          const formItem = value.find(v => v.id === elem.id);
          if (elem.quantity !== formItem!.quantity) {
            this.store.dispatch(new CartUpdateActionNgxs({
              id: elem.id, item: {
                ...elem,
                quantity: formItem!.quantity
              }
            }))
            this.loadData();
          }
        });
      });
  }

  loadData(): void {
    this.total = 0;
    // this.dataSource = this.cartStore.state.items.map(item => {
    //   const totalPrice = item.quantity * item.price;
    //   this.total = this.total + totalPrice;
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     price: item.price,
    //     quantity: item.quantity,
    //     total: totalPrice
    //   }
    // });

    this.dataSource = this.store.selectSnapshot(state => state.cart.items).map((item: { quantity: number; price: number; id: any; name: any; }) => {
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

  removeItem(id: number, formIndex: number): void {
    // this.cartStore.dispatch(new CartDeleteAction({ id: id }));
    this.store.dispatch(new CartDeleteActionNgxs({ id: id }));
    this.items.removeAt(formIndex);
    this.loadData();
  }

  clear(): void {
    // this.cartStore.dispatch(new CartSetAllAction({ items: [] }));
    this.store.dispatch(new CartSetAllActionNgxs({ items: [] }));
    this.loadData();
  }

}
