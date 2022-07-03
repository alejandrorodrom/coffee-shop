import { Action } from '../store';
import { Item } from '../../interfaces/item.interface';

export enum CartType {
  SET_ALL = '[Cart] set all',
  ADD = '[Cart] add',
  UPDATE = '[Cart] update',
  SELECT = '[Cart] select',
  DELETE = '[Cart] delete'
}

export class CartSetAllAction implements Action {
  readonly type = CartType.SET_ALL;
  constructor(public payload: { items: Item[] }) { }
}

export class CartAddAction implements Action {
  readonly type = CartType.ADD;
  constructor(public payload: { item: Item }) { }
}

export class CartUpdateAction implements Action {
  readonly type = CartType.UPDATE;
  constructor(public payload: { id: number; item: Item }) { }
}

export class CartSelectAction implements Action {
  readonly type = CartType.SELECT;
  constructor(public payload: { id: number }) { }
}

export class CartDeleteAction implements Action {
  readonly type = CartType.DELETE;
  constructor(public payload: { id: number }) { }
}

export type CartActions =
  CartSetAllAction |
  CartAddAction |
  CartUpdateAction |
  CartSelectAction |
  CartDeleteAction
