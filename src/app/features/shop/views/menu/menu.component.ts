import { Component } from '@angular/core';
import { Menu } from '../../../../shared/interfaces/menu.interface';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../shared/interfaces/item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [];

  constructor(
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.data.subscribe(value => {
      if (value['data'].error) {
      } else {
        this.menus = value['data'];
      }
    })
  }

  addCart(menu: Item): void {
    console.log(menu);
  }
}
