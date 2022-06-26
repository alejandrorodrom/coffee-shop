import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<{ token: string, user: string, email: string }> {
    return this.http
      .post<{ token: string, user: string, email: string }>('auth', user)
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
  }

  register(user: User): Observable<{ email: string, token: string }> {
    return this.http
      .post<{ token: string, email: string }>('register', user)
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
  }
}
