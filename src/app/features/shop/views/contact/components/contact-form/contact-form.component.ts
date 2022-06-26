import { Component } from '@angular/core';
import { ContactService } from '../../../../../../shared/http/contact/contact.service';
import { SuccessService } from '../../../../../../shared/services/success/success.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormControlService } from 'src/app/shared/utils/form-control/form-control.service';
import { ControlError } from 'src/app/shared/interfaces/error.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

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
    console.log(this.phoneControl.errors);

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
    private contactService: ContactService,
    private successService: SuccessService,
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

  contactNow(): void {
    this.contactService.contactNow(this.contactFormGroup.value)
      .subscribe({
        next: value => this.successService.showSuccess(value.message),
        error: error => {
          console.error(error)
        },
        complete: () => {
          this.contactFormGroup.setValue({
            email: '',
            name: '',
            phone: ''
          });
          this.contactFormGroup.reset();
        }
      })
  }

}
