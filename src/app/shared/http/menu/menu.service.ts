import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { Menu } from '../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getMenus(): Observable<MenuModel[]> {
    return this.http
      .get<Menu[]>('menus')
      .pipe(
        map(
          value => value.map(menu => new MenuModel(menu))
        )
      );
  }
}
