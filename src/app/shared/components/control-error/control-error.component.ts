import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ControlError } from '../../interfaces/error.interface';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.css']
})
export class ControlErrorComponent {

  @Input() show = false;
  @Input() errors: ValidationErrors | null = null;
  @Input() messages: ControlError[] = []

  get errorKeys() {
    return Object.keys(this.errors || []);
  }

  constructor() { }

  getMessage(error: string): ControlError | undefined {
    return this.messages.find(value => value.validator === error);
  }

}
