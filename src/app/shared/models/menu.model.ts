import { Menu } from '../interfaces/menu.interface';

export class MenuModel {
  id: number;
  image: string;
  name: string;
  price: number;
  beforePrice: number;

  constructor(data: Menu) {
    this.id = data.id;
    this.image = data.image;
    this.name = data.name;
    this.price = data.price;
    this.beforePrice = data.beforePrice;
  }
}
