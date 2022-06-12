import { Menu } from '../interfaces/menu.interface';

export class MenuModel {
  image: string;
  name: string;
  price: number;
  beforePrice: number;

  constructor(data: Menu) {
    this.image = data.image;
    this.name = data.name;
    this.price = data.price;
    this.beforePrice = data.beforePrice;
  }
}
