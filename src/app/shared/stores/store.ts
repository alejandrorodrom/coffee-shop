import { BehaviorSubject, map, Observable } from 'rxjs';

export type Action = {
  type: string;
  payload: any;
}

export type ReducerFn<T> = (state: T, action: any) => any;

export class Store<T> {
  private subject: BehaviorSubject<T>;

  state$: Observable<T>

  get state(): T {
    return this.subject.getValue();
  }

  constructor(initialState: T, private reducerFn: ReducerFn<T>) {
    this.subject = new BehaviorSubject<T>(initialState);
    this.state$ = this.subject.asObservable();
  }

  dispatch(action: Action): void {
    const newState = this.reducerFn(this.state, action);
    this.subject.next(newState);
  }

  select<R>(fn: (state: T) => R): Observable<R> {
    return this.state$
      .pipe(
        map(state => fn(state))
      )
  }
}
