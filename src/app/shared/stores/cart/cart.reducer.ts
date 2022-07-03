import { CartState } from './cart.state';
import { CartActions, CartType } from './cart.actions';

export const reducerCart = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case CartType.SET_ALL:
      return {
        ...state,
        items: action.payload.items,
        loaded: true,
      };

    case CartType.ADD:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.item
        ]
      };

    case CartType.UPDATE:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload.item;
          }
          return item;
        })
      };

    case CartType.SELECT:
      return {
        ...state,
        selected: state.items.find(
          item => item.id === action.payload.id
        )
      };

    case CartType.DELETE:
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload.id
        )
      };
  }
}
