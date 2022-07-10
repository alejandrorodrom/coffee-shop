import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ControlError } from '../../../../../../shared/interfaces/error.interface';
import { FormControlService } from '../../../../../../shared/utils/form-control/form-control.service';
import { ContactStore } from '../../../../../../shared/stores/contact/contact.store';
import { Store } from '@ngxs/store';
import { ContactSetAllActionNgxs } from '../../../../../../shared/stores/contact-ngxs/contact-ngxs.actions';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
    {validator: 'required', message: 'El nombre es obligatorio'}
  ];

  readonly emailErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El email es obligatorio'},
    {validator: 'email', message: 'El email es invalido'}
  ];

  readonly phoneErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El telefono es obligatorio'},
    {validator: 'maxlength', message: 'El telefono tiene como maximo 13 digitos'},
    {validator: 'minlength', message: 'El telefono tiene como minimo 7 digitos'},
    {validator: 'pattern', message: 'El telefono es invalido'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formControlService: FormControlService,
    private contactStore: ContactStore,
    private store: Store
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
      ]],
      recaptcha: ['', Validators.required]
    });

    // this.contactFormGroup.setValue({
    //   name: this.contactStore.state.name,
    //   email: this.contactStore.state.email,
    //   phone: this.contactStore.state.phone
    // });

    // this.contactFormGroup.setValue({
    //   name: this.store.selectSnapshot(state => state.contact.name),
    //   email: this.store.selectSnapshot(state => state.contact.email),
    //   phone: this.store.selectSnapshot(state => state.contact.phone)
    // });

    console.log(this.store.selectSnapshot(state => state));

    this.contactFormGroup.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.store.dispatch(new ContactSetAllActionNgxs(value));
        // this.contactStore.dispatch(new ContactSetAllAction(value));
      });
  }

  expireEvent(): void {
    console.log('Expiro');
  }

  successEvent(): void {
    console.log('Todo correcto');
  }
}
