import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryComponent } from './components/category/category.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { LoginsGuard } from './services/guards/logins.guard';
export const ProductRoutes: Routes = [
    {
        path:'admin',
        component: HomeComponent,
        children:[
            {
                path:'',
                component:LoginComponent,
                canDeactivate: [LoginsGuard]
            },
            {
                path:'product',
                component: ProductComponent,
                children:[
                    {
                        path:'list',
                        component:ProductListComponent
                    },
                    {
                        path:'add',
                        component:ProductAddComponent
                    },
                     {
                        path:':id',
                        component:ProductEditComponent
                    },
                ]
            },
            {
                path:'category',
                component:CategoryComponent,
                children: [
                    {
                        path:'add',
                        component:CategoryAddComponent
                    },
                    {
                        path:'list',
                        component:CategoryListComponent
                    },
                    {
                        path:':id',
                        component:CategoryEditComponent
                    }
                ]
            },
            {
                path:'user',
                children:[
                    {
                        path:'list',
                        component:UserListComponent
                    },
                    {
                        path:':id',
                        component:UserEditComponent
                    }
                ]
            }
        ]
    },
    
];
@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(ProductRoutes)
    ],
    exports: [RouterModule]
})
export class ProductRoute{}