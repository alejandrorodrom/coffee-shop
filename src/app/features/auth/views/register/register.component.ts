import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlError } from '../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userRegisterForm = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]
    ),
    repeatPassword: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]
    )
  }, {

  });

  get emailControl(): FormControl {
    return this.userRegisterForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.userRegisterForm.get('password') as FormControl;
  }

  get repeatPasswordControl(): FormControl {
    return this.userRegisterForm.get('repeatPassword') as FormControl;
  }

  readonly emailErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El email es requerido' },
    { validator: 'email', message: 'El email es invalido' }
  ];

  readonly passwordErrorMessage: ControlError[] = [
    { validator: 'required', message: 'La contraseña es requerida' },
    { validator: 'maxlength', message: 'La contraseña como maximo puede tener 10 caracteres' },
    { validator: 'minlength', message: 'La contraseña como minimo debe tener 5 caracteres' }
  ];

  readonly repeatPasswordErrorMessage: ControlError[] = [
    { validator: 'required', message: 'La contraseña es requerida' },
    { validator: 'maxlength', message: 'La contraseña como maximo puede tener 10 caracteres' },
    { validator: 'minlength', message: 'La contraseña como minimo debe tener 5 caracteres' }
  ];

  constructor() {
  }

}
