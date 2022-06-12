import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorSubject = new Subject<string>();

  constructor() { }

  showError(error: string): void {
    this.errorSubject.next(error);
  }
}
