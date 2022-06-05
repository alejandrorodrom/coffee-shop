import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ShopGuard implements CanActivateChild {

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivateChild(): boolean {
    const token = !!this.userService.token?.length;
    if (token) {
      this.router.navigateByUrl('home');
      return false;
    }
    return true;
  }

}
