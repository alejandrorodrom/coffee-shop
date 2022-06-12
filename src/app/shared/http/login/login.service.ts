import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
}
