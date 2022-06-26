import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ControlError } from '../../../../../../shared/interfaces/error.interface';
import { FormControlService } from '../../../../../../shared/utils/form-control/form-control.service';

@Injectable()
export class ContactFormPresenter {

  contactFormGroup: FormGroup;

  get nameControl(): FormControl {
    return this.contactFormGroup.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.contactFormGroup.get('email') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.contactFormGroup.get('phone') as FormControl;
  }


  get isNameError(): boolean {
    return this.formControlService.isError(this.nameControl);
  }

  get isEmailError(): boolean {
    return this.formControlService.isError(this.emailControl);
  }

  get isPhoneError(): boolean {
    return this.formControlService.isError(this.phoneControl);
  }


  get nameErrors(): ValidationErrors | null {
    return this.nameControl.errors;
  }

  get emailErrors(): ValidationErrors | null {
    return this.emailControl.errors;
  }

  get phoneErrors(): ValidationErrors | null {
    return this.phoneControl.errors;
  }

  readonly nameErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El nombre es obligatorio' }
  ];

  readonly emailErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El email es obligatorio' },
    { validator: 'email', message: 'El email es invalido' }
  ];

  readonly phoneErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El telefono es obligatorio' },
    { validator: 'maxlength', message: 'El telefono tiene como maximo 13 digitos' },
    { validator: 'minlength', message: 'El telefono tiene como minimo 7 digitos' },
    { validator: 'pattern', message: 'El telefono es invalido' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private formControlService: FormControlService
  ) {
    this.contactFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(7),
        Validators.pattern(/^\x2b[0-9, $]*$/)
      ]]
    });
  }
}
