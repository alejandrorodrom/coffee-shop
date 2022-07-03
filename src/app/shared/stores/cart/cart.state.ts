import { Item } from '../../interfaces/item.interface';

export interface CartState {
  items: Item[];
  selected: Item | undefined;
  loaded: boolean;
}
