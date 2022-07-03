import { ContactState } from './contact.state';
import { reducerContact } from './contact.reducer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../store';

export const initialContactState: ContactState = {
  name: '',
  email: '',
  phone: ''
}

@Injectable({
  providedIn: 'root'
})
export class ContactStore extends Store<ContactState>{

  name$: Observable<string> = this.select(state => state.name);
  email$: Observable<string> = this.select(state => state.email);
  phone$: Observable<string> = this.select(state => state.phone);

  constructor() {
    super(initialContactState, reducerContact);
  }
}
