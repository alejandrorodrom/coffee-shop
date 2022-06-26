import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { AboutComponent } from './views/about/about.component';
import { MenuComponent } from './views/menu/menu.component';
import { CardMenuComponent } from '../../shared/components/card-menu/card-menu.component';
import { ProductComponent } from './views/product/product.component';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { StarsComponent } from '../../shared/components/stars/stars.component';
import { ButtonBorderComponent } from '../../shared/components/button-border/button-border.component';
import { ReviewComponent } from './views/review/review.component';
import { CardReviewComponent } from '../../shared/components/card-review/card-review.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContactFormComponent } from './views/contact/components/contact-form/contact-form.component';
import { InputModule } from '../../shared/components/input/input.module';
import { BlogComponent } from './views/blog/blog.component';
import { CardBlogComponent } from '../../shared/components/card-blog/card-blog.component';
import { TitleModule } from '../../shared/components/title/title.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSuccessComponent } from './views/contact/components/modal-success/modal-success.component';
import { ControlErrorModule } from 'src/app/shared/components/control-error/control-error.module';

@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    HeaderComponent,
    LinkComponent,
    AboutComponent,
    MenuComponent,
    CardMenuComponent,
    ProductComponent,
    CardProductComponent,
    StarsComponent,
    ButtonBorderComponent,
    ReviewComponent,
    CardReviewComponent,
    ContactComponent,
    ContactFormComponent,
    BlogComponent,
    CardBlogComponent,
    ModalSuccessComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    InputModule,
    TitleModule,
    ButtonModule,
    ControlErrorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
