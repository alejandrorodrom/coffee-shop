import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  successSubject = new Subject<string>();

  constructor() { }

  showSuccess(message: string): void {
    this.successSubject.next(message);
  }
}
