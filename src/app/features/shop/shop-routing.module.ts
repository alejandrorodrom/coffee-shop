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
import { MenuResolver } from '../../shared/resolvers/menu/menu.resolver';
import { ReviewComponent } from './views/review/review.component';
import { ReviewResolver } from '../../shared/resolvers/review/review.resolver';
import { ContactComponent } from './views/contact/contact.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogResolver } from '../../shared/resolvers/blog/blog.resolver';

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
        component: MenuComponent,
        resolve: {
          data: MenuResolver
        }
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'review',
        component: ReviewComponent,
        resolve: {
          data: ReviewResolver
        }
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent,
        resolve: {
          data: BlogResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
