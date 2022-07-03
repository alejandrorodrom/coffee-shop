import { ContactType } from '../contact/contact.actions';

export class ContactSetAllActionNgxs {
  static readonly type = ContactType.SET_ALL;
  constructor(public payload: { name: string; email: string; phone: string }) { }
}
