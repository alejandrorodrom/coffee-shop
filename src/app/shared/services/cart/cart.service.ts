import { Injectable } from '@angular/core';
import { CartStore } from '../../stores/cart/cart.store';
import { Item } from '../../interfaces/item.interface';
import { CartAddAction, CartSelectAction, CartUpdateAction } from '../../stores/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private cartStore: CartStore
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
}
