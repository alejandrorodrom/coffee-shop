import { CartType } from '../cart/cart.actions';
import { Item } from '../../interfaces/item.interface';

export class CartSetAllActionNgxs {
  static readonly type = CartType.SET_ALL;
  constructor(public payload: { items: Item[] }) { }
}

export class CartAddActionNgxs {
  static readonly type = CartType.ADD;
  constructor(public payload: { item: Item }) { }
}

export class CartUpdateActionNgxs {
  static readonly type = CartType.UPDATE;
  constructor(public payload: { id: number; item: Item }) { }
}

export class CartSelectActionNgxs {
  static readonly type = CartType.SELECT;
  constructor(public payload: { id: number }) { }
}

export class CartDeleteActionNgxs {
  static readonly type = CartType.DELETE;
  constructor(public payload: { id: number }) { }
}
