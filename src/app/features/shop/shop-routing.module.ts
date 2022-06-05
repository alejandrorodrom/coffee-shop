import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { MenuComponent } from './views/menu/menu.component';
import { ProductComponent } from './views/product/product.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { AuthChildGuard } from '../../shared/guards/auth-child.guard';
import { AuthDeactivateGuard } from '../../shared/guards/auth-deactivate.guard';
import { MenuResolver } from '../../shared/resolvers/menu.resolver';
import { ReviewComponent } from './views/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canDeactivate: [AuthDeactivateGuard],
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'menu',
        resolve: {
          data: MenuResolver
        },
        component: MenuComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'review',
        component: ReviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
