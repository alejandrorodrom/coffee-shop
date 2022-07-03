export enum ContactType {
  SET_ALL = '[Contact] set all'
}

export class ContactSetAllAction {
  readonly type = ContactType.SET_ALL;
  constructor(public payload: { name: string, email: string, phone: string }) {}
}

export type ContactActions = ContactSetAllAction;
