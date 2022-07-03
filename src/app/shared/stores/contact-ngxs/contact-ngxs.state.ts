import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ContactState } from '../contact/contact.state';
import { initialContactState } from '../contact/contact.store';
import { ContactSetAllActionNgxs } from './contact-ngxs.actions';
import { ContactActions } from '../contact/contact.actions';

@State<ContactState>({
  name: 'contact',
  defaults: initialContactState
})
@Injectable()
export class ContactNgxsState {

  @Selector()
  static data(state: ContactState): ContactState {
    return state;
  }

  @Action(ContactSetAllActionNgxs)
  contactSetAll(ctx: StateContext<ContactState>, action: ContactActions) {
    ctx.setState({
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone
    })
  }
}
