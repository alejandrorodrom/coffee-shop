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
import { MenuComponent } from './views/menu/menu.component';
import { CardMenuComponent } from '../../shared/components/card-menu/card-menu.component';
import { ProductComponent } from './views/product/product.component';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { StarsComponent } from '../../shared/components/stars/stars.component';
import { ButtonBorderComponent } from '../../shared/components/button-border/button-border.component';
import { ReviewComponent } from './views/review/review.component';
import { CardReviewComponent } from '../../shared/components/card-review/card-review.component';


@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    HeaderComponent,
    LinkComponent,
    ButtonComponent,
    AboutComponent,
    TitleComponent,
    MenuComponent,
    CardMenuComponent,
    ProductComponent,
    CardProductComponent,
    StarsComponent,
    ButtonBorderComponent,
    ReviewComponent,
    CardReviewComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
