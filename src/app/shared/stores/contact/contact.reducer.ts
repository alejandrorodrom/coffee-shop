import { ContactState } from './contact.state';
import { ContactActions, ContactType } from './contact.actions';

export const reducerContact = (state: ContactState, action: ContactActions) => {
  switch (action.type) {
    case ContactType.SET_ALL:
      return {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      };
  }
}
