import { Component } from '@angular/core';
import { ContactService } from '../../../../../../shared/http/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  error = false;

  constructor(
    private contactService: ContactService
  ) { }

  contactNow(): void {
    this.contactService.contactNow()
      .subscribe({
        next: value => console.log(value),
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

}
