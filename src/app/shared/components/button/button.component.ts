import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
