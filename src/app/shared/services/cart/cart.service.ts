import { Injectable } from '@angular/core';
import { CartStore } from '../../stores/cart/cart.store';
import { Item } from '../../interfaces/item.interface';
import { CartAddAction, CartSelectAction, CartUpdateAction } from '../../stores/cart/cart.actions';
import { Store } from '@ngxs/store';
import {
  CartAddActionNgxs,
  CartSelectActionNgxs,
  CartUpdateActionNgxs
} from '../../stores/cart-ngxs/cart-ngxs.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private cartStore: CartStore,
    private store: Store
  ) { }

  addCart(item: Item): void {
    this.cartStore.dispatch(new CartSelectAction({ id: item.id }));
    const selected =  this.cartStore.state.selected;
    if (selected && selected.id === item.id) {
      const updateMenu: Item = {
        ...item,
        quantity: selected.quantity + item.quantity
      };
      this.cartStore.dispatch(new CartUpdateAction({ id: item.id, item: updateMenu }))
    } else {
      this.cartStore.dispatch(new CartAddAction({ item: item }));
    }
  }

  addCartNgxs(item: Item): void {
    this.store.dispatch(new CartSelectActionNgxs({ id: item.id }));
    const selected = this.store.selectSnapshot(state => state.cart.selected);
    if (selected && selected.id === item.id) {
      const updateMenu: Item = {
        ...item,
        quantity: selected.quantity + item.quantity
      };
      this.store.dispatch(new CartUpdateActionNgxs({ id: item.id, item: updateMenu }))
    } else {
      this.store.dispatch(new CartAddActionNgxs({ item: item }));
    }
  }
}
