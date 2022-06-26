import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ControlError } from '../../../../shared/interfaces/error.interface';
import { PasswordValidator } from '../../../../shared/validators/password/password.validator';
import { FormControlService } from '../../../../shared/utils/form-control/form-control.service';

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
    validators: [
      PasswordValidator.confirm
      // confirmPassword
    ]
  });


  // Se obtiene el detalle de cada uno de los controles
  get emailControl(): FormControl {
    return this.userRegisterForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.userRegisterForm.get('password') as FormControl;
  }

  get repeatPasswordControl(): FormControl {
    return this.userRegisterForm.get('repeatPassword') as FormControl;
  }


  // Evaluar si mostrar o no el mensaje de error
  get isEmailError(): boolean {
    return this.formControlUtil.isError(this.emailControl);
  }

  get isPasswordError(): boolean {
    return this.formControlUtil.isError(this.passwordControl);
  }

  get isRepeatPasswordError(): boolean {
    return this.formControlUtil.isError(this.repeatPasswordControl);
  }

  get isPasswordsError(): boolean {
    return this.repeatPasswordControl.touched || this.repeatPasswordControl.dirty;
  }


  // Lista de errores por control
  get emailErrors(): ValidationErrors | null {
    return this.emailControl.errors;
  }

  get passwordErrors(): ValidationErrors | null {
    return this.passwordControl.errors;
  }

  get repeatPasswordErrors(): ValidationErrors | null {
    return this.repeatPasswordControl.errors;
  }

  get formErrors(): ValidationErrors | null {
    return this.userRegisterForm.errors;
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

  readonly formErrorMessage: ControlError[] = [
    { validator: 'repeatPassword', message: 'La contraseña debe coincidir' }
  ];

  constructor(
    private formControlUtil: FormControlService
  ) {
  }

}
