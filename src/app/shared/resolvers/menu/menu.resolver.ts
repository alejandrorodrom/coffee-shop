import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CardMenu } from '../../interfaces/card-menu.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<CardMenu[]> {
  resolve(): Observable<CardMenu[]> {
    return of([
      {
        image: 'assets/images/menu-1.png',
        name: 'Tasty And Healty',
        price: 15.99,
        beforePrice: 19.99
      },
      {
        image: 'assets/images/menu-2.png',
        name: 'Coffee Black',
        price: 18.99,
        beforePrice: 21.99
      },
      {
        image: 'assets/images/menu-3.png',
        name: 'Tasty And Healty',
        price: 25.99,
        beforePrice: 30.99
      },
      {
        image: 'assets/images/menu-4.png',
        name: 'Tasty And Healty',
        price: 29.99,
        beforePrice: 50.99
      },
      {
        image: 'assets/images/menu-5.png',
        name: 'Tasty And Healty',
        price: 30.99,
        beforePrice: 36.99
      },
      {
        image: 'assets/images/menu-6.png',
        name: 'Tasty And Healty',
        price: 40.99,
        beforePrice: 80.99
      }
    ]);
  }
}
