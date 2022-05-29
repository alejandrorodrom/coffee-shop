import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../../../../shared/interfaces/card-menu.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: CardMenu[] = [];

  constructor(
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.data.subscribe(value => {
      console.log(value['data']);
      if (value['data'].error) {
        console.log('error');
      } else {
        this.menus = value['data'];
      }
    })
  }

  ngOnInit(): void {
  }

}
