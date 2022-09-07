import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { OtherproductComponent } from './components/otherproduct/otherproduct.component';
import { ProductComponent } from './components/product/product.component';
import { ViewRoutes } from './view-product.routes';
//Service
import { ProductService } from './services/product.service';
import { AuthGuard } from './services/guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginviewComponent } from './components/loginview/loginview.component';
import { RegisterviewComponent } from './components/registerview/registerview.component';
@NgModule({
  declarations: [
    HomeComponent,
    DetailproductComponent,
    OtherproductComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    LoginviewComponent,
    RegisterviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ViewRoutes),
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers:[
    ProductService,
    AuthGuard

  ]
})
export class ViewProductModule { }
