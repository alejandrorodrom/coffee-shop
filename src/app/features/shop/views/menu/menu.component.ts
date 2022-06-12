import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../../shared/interfaces/menu.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
