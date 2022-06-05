import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit {

  @Input() image = '';
  @Input() title = '';
  @Input() author = '';
  @Input() resume = '';

  constructor() { }

  ngOnInit(): void {
  }

}
