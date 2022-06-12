import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone({
      url: `${environment.api}${request.url}`,
      setHeaders: {
        'Authorization': `${this.userService.token}`
      }
    });
    console.log(requestClone.url);
    return next.handle(requestClone);
  }
}
