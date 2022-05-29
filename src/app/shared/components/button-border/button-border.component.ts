import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-border',
  templateUrl: './button-border.component.html',
  styleUrls: ['./button-border.component.css']
})
export class ButtonBorderComponent implements OnInit {

  @Input() icon = '';
  @Input() text = '';
  @Input() mode: 'circle' | 'square' = 'square';

  constructor() { }

  ngOnInit(): void {
  }

}
