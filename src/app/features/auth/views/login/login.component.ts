import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/http/auth/auth.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormControlService } from '../../../../shared/utils/form-control/form-control.service';
import { ControlError } from '../../../../shared/interfaces/error.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userFormGroup: FormGroup;

  get emailControl(): FormControl {
    return this.userFormGroup.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.userFormGroup.get('password') as FormControl;
  }


  get isEmailError(): boolean {
    return this.formControlUtil.isError(this.emailControl);
  }

  get isPasswordError(): boolean {
    return this.formControlUtil.isError(this.passwordControl);
  }


  get emailErrors(): ValidationErrors | null {
    return this.emailControl.errors;
  }

  get passwordErrors(): ValidationErrors | null {
    return this.passwordControl.errors;
  }

  readonly emailErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El email es obligatorio' },
    { validator: 'email', message: 'El email es invalido' }
  ];

  readonly passwordErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El password es obligatorio' },
    { validator: 'maxlength', message: 'El password como maximo debe tener 10 caracteres' },
    { validator: 'minlength', message: 'El password como minimo debe tener 4 caracteres' }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private formControlUtil: FormControlService
  ) {
    this.userFormGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(4)
        ]
      ]
    })
  }

  // user: test@test.com
  // password: test

  login(): void {
    this.authService.login(this.userFormGroup.value)
      .subscribe({
        next: value => {
          this.userService.create(value.token);
          this.router.navigateByUrl('home');
        },
        error: err => console.error(err)
      })
  }
}
