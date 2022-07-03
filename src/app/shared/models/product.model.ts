import { Product } from '../interfaces/product.interface';

export class ProductModel {
  id: number;
  image: string;
  name: string;
  score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  price: number;
  beforePrice: number;

  constructor(data: Product) {
    this.id = data.id;
    this.image = data.image;
    this.name = data.name;
    this.score = data.score;
    this.price = data.price;
    this.beforePrice = data.beforePrice;
  }
}
