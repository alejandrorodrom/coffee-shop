import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() image!: string;
  @Input() name!: string;
  @Input() score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 0;
  @Input() price!: number;
  @Input() beforePrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
