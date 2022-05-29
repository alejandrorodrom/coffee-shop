import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  wordOne = '';
  wordTwo = '';

  @Input() text!: string;
  @Input() mode: '1' | '2' = '1';

  constructor() { }

  ngOnInit(): void {
    const words = this.text.split(' ');
    this.wordOne = this.text.length > 0 ? words[0] : '';
    this.wordTwo = this.text.length > 1 ? words[1] : '';
  }

}
