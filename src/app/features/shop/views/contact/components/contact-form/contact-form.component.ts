import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../../../../shared/http/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor(
    private contactService: ContactService
  ) { }

  contactNow(): void {
    this.contactService.contactNow()
      .subscribe(value => console.log(value))
  }

}
