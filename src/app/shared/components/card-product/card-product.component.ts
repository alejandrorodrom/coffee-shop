import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  @Input() id!: number;
  @Input() image!: string;
  @Input() name!: string;
  @Input() score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 0;
  @Input() price!: number;
  @Input() beforePrice!: number;

  @Output() addCart = new EventEmitter<Item>();

  constructor() { }

  emitItemAddCart(): void {
    this.addCart.emit({
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: 1
    })
  }
}
