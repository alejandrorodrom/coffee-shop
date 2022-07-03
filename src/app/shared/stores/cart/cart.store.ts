import { Store } from '../store';
import { Observable } from 'rxjs';
import { Item } from '../../interfaces/item.interface';
import { reducerCart } from './cart.reducer';
import { CartState } from './cart.state';
import { Injectable } from '@angular/core';

export const initialCartState: CartState = {
  loaded: false,
  items: [],
  selected: undefined
}

@Injectable({
  providedIn: 'root'
})
export class CartStore extends Store<CartState>{
  items$: Observable<Item[]> = this.select(state => state.items);

  constructor() {
    super(initialCartState, reducerCart);
  }
}
