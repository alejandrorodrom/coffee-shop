import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) {
  }

  contactNow(): Observable<{ message: string }> {
    return this.http
      .post<{ message: string }>('contact', {
        'name': 'Pedro',
        'email': 'test@test.com',
        'phone': 156165161461
      }, {
        headers: {
          'Authorization': '651s6df16fsd156fds51651165'
        }
      })
      .pipe(
        catchError(val => {
          return throwError(val);
        })
      );
  }
}
