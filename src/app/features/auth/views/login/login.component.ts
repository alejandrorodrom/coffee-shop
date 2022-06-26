import { Component } from '@angular/core';
import { LoginService } from '../../../../shared/http/login/login.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  // user: test@test.com
  // password: test

  login(): void {
    this.loginService.login(this.user)
      .subscribe({
        next: value => {
          this.userService.create(value.token);
          this.router.navigateByUrl('home');
        },
        error: err => console.error(err)
      })
  }
}
