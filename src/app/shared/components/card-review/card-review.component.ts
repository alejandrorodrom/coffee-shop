import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent implements OnInit {

  @Input() comment = '';
  @Input() image = '';
  @Input() name = '';
  @Input() score:  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
