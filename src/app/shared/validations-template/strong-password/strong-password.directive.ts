import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appStrongPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StrongPasswordDirective),
      multi: true
    }
  ]
})
export class StrongPasswordDirective implements Validator {

  @Input('appStrongPassword') enable = true;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.enable) {
      if (control.value?.length < 5 ) {
        return { strongPassword: true }
      }
    }
    return null;
  }

}
