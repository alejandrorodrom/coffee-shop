import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { TitleComponent } from '../../shared/components/title/title.component';


@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    HeaderComponent,
    LinkComponent,
    ButtonComponent,
    AboutComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
