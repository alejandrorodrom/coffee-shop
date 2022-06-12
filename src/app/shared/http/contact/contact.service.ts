import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Contact } from "src/app/shared/interfaces/contact.interface";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) {
  }

  contactNow(body: Contact): Observable<{ message: string }> {
    return this.http
      .post<{ message: string }>('contact', body)
      .pipe(
        catchError(val => {
          return throwError(val);
        })
      );
  }
}
