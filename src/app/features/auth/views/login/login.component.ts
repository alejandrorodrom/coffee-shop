import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../shared/http/login/login.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  login(): void {
    this.loginService.login()
      .subscribe({
        next: value => {
          this.userService.create(value.token);
          this.router.navigateByUrl('home');
          console.log(value);
        },
        error: err => console.error(err),
        complete: () => console.log('Completo')
      })
  }
}
