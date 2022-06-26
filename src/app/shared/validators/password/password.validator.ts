import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static confirm(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password') as FormControl;
    const repeatPassword = control.get('repeatPassword') as FormControl;

    return password.value === repeatPassword.value
      ? null
      : { repeatPassword: true }
  }
}


export const confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password') as FormControl;
  const repeatPassword = control.get('repeatPassword') as FormControl;

  return password.value === repeatPassword.value
    ? null
    : { repeatPassword: true }
}
