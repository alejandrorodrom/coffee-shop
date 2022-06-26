import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { InputModule } from '../../shared/components/input/input.module';
import { LoginComponent } from './views/login/login.component';
import { TitleModule } from '../../shared/components/title/title.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrongPasswordDirective } from '../../shared/validators/strong-password/strong-password.directive';
import { RegisterComponent } from './views/register/register.component';
import { ControlErrorModule } from '../../shared/components/control-error/control-error.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    StrongPasswordDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputModule,
    TitleModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorModule
  ]
})
export class AuthModule { }
