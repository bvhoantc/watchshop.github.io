import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//Shared module
import { SharedModule } from '../shared/shared.module';
// import { ProductRoute } from './manager-product.routes';
//Product
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutes } from './manager-product.routes';
import { HttpClientModule } from '@angular/common/http';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryComponent } from './components/category/category.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
//Service
import { ManagerProductService } from './services/manager-product.service';
import { ManagerCategoryService } from './services/manager-category.service';
import { ManagerUserService } from './services/manager-user.service';
import { LoginComponent } from './components/login/login.component';
import { LoginsGuard } from './services/guards/logins.guard';


@NgModule({
  declarations: [
    HomeComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild(ProductRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ManagerProductService,
    ManagerCategoryService,
    ManagerUserService,
    LoginsGuard
  ]
})
export class ManagerProductModule { }
