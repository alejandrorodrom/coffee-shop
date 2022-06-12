import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<{ token: string, user: string, email: string }> {
    return this.http
      .post<{ token: string, user: string, email: string }>('auth', {
        email: 'test@test.com',
        password: 'test'
      })
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
  }
}
