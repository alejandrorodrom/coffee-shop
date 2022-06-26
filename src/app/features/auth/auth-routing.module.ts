import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './views/login/login.component';
import { ShopGuard } from '../../shared/guards/shop/shop.guard';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [ShopGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
