import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent {

  @Input() id!: number;
  @Input() image!: string;
  @Input() name!: string;
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
    });
  }
}
