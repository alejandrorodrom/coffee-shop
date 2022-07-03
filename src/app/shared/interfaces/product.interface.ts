export interface Product {
  id: number;
  image: string;
  name: string;
  score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  price: number;
  beforePrice: number;
}
