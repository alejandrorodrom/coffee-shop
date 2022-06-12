import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../http/menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<MenuModel[]> {

  constructor(
    private menuService: MenuService
  ) {
  }

  resolve(): Observable<MenuModel[]> {
    return this.menuService.getMenus();
  }
}
