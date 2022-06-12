import { Component } from '@angular/core';
import { ContactService } from '../../../../../../shared/http/contact/contact.service';
import { Contact } from "src/app/shared/interfaces/contact.interface";
import { SuccessService } from '../../../../../../shared/services/success/success.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: Contact = {
    name: '',
    email: '',
    phone: 0
  }

  error = false;

  constructor(
    private contactService: ContactService,
    private successService: SuccessService
  ) { }

  contactNow(): void {
    this.contactService.contactNow(this.contact)
      .subscribe({
        next: value => this.successService.showSuccess(value.message),
        error: error => {
          console.error(error)
          this.error = true;
          setTimeout(() => {
            this.error = false
          }, 5000);
        },
        complete: () => {
          console.log('completo');
        }
      })
  }

  validate(): void {
    this.error = this.contact.name.length > 3;
  }

}
