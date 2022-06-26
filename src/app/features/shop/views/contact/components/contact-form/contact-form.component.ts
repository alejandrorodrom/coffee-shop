import { Component } from '@angular/core';
import { ContactService } from '../../../../../../shared/http/contact/contact.service';
import { SuccessService } from '../../../../../../shared/services/success/success.service';
import { ContactFormPresenter } from './contact-form.presenter';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [ContactFormPresenter]
})
export class ContactFormComponent {

  constructor(
    private contactService: ContactService,
    private successService: SuccessService,
    public presenter: ContactFormPresenter
  ) {
   }

  contactNow(): void {
    this.contactService.contactNow(this.presenter.contactFormGroup.value)
      .subscribe({
        next: value => this.successService.showSuccess(value.message),
        error: error => {
          console.error(error)
        },
        complete: () => {
          this.presenter.contactFormGroup.setValue({
            email: '',
            name: '',
            phone: ''
          });
          this.presenter.contactFormGroup.reset();
        }
      })
  }

}
