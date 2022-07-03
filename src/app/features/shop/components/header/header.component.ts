import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { UserService } from '../../../../shared/services/user/user.service';
import { CartStore } from '../../../../shared/stores/cart/cart.store';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  route!: NavigationEnd;

  cartQuantity = 0;

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private cartStore: CartStore,
    private store: Store
  ) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
      .subscribe(value => this.route = value)

    // console.log(this.activatedRoute.snapshot.queryParamMap.get('test'));

    // const subscribe = this.cartStore.items$
    //   .subscribe(value => this.cartQuantity = value.length);

    const subscribe = this.store.select(state => state.cart.items)
      .subscribe(value => this.cartQuantity = value.length);
    this.subscription.add(subscribe);
  }

  redirectAbout(): void {
    this.router.navigateByUrl('/about');
    // this.router.navigate(['/about', 'detail']);
  }

  logout(): void {
    this.userService.destroy();
    this.router.navigateByUrl('/auth')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
