import { Component } from '@angular/core';
import { Menu } from '../../../../shared/interfaces/menu.interface';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../shared/interfaces/item.interface';
import { CartService } from '../../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.activateRoute.data.subscribe(value => {
      if (value['data'].error) {
      } else {
        this.menus = value['data'];
      }
    })
  }

  addCart(menu: Item): void {
    // this.cartService.addCart(menu);
    this.cartService.addCartNgxs(menu);
  }
}
