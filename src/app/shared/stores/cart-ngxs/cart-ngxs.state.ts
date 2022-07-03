import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { initialCartState } from '../cart/cart.store';
import { CartState } from '../cart/cart.state';
import {
  CartAddActionNgxs,
  CartDeleteActionNgxs,
  CartSelectActionNgxs,
  CartSetAllActionNgxs,
  CartUpdateActionNgxs
} from './cart-ngxs.actions';

@State<CartState>({
  name: 'cart',
  defaults: initialCartState
})
@Injectable()
export class CartNgxsState {

  @Selector()
  static cart(state: CartState): CartState {
    return state;
  }

  @Action(CartAddActionNgxs)
  cartAdd(ctx: StateContext<CartState>, action: CartAddActionNgxs) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [
        ...state.items,
        action.payload.item
      ]
    });
  }

  @Action(CartSetAllActionNgxs)
  cartSetAll(ctx: StateContext<CartState>, action: CartSetAllActionNgxs) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.payload.items,
      loaded: true
    });
  }

  @Action(CartUpdateActionNgxs)
  cartUpdate(ctx: StateContext<CartState>, action: CartUpdateActionNgxs) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.map(item => {
        if (item.id === action.payload.id) {
          return action.payload.item;
        }
        return item
      })
    });
  }

  @Action(CartDeleteActionNgxs)
  cartDelete(ctx: StateContext<CartState>, action: CartDeleteActionNgxs) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(
        item => item.id !== action.payload.id
      )
    })
  }

  @Action(CartSelectActionNgxs)
  cartSelect(ctx: StateContext<CartState>, action: CartSelectActionNgxs) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selected: state.items.find(
        item => item.id === action.payload.id
      )
    });
  }
}
