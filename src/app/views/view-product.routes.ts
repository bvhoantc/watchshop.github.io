import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { OtherproductComponent } from './components/otherproduct/otherproduct.component';
import { ProductComponent } from './components/product/product.component';
import { Component } from '@angular/core';
import { RegisterviewComponent } from './components/registerview/registerview.component';
import { LoginviewComponent } from './components/loginview/loginview.component';

export const ViewRoutes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'product',
        component:ProductComponent,
        children:[
            {
                path:':id',
                component:DetailproductComponent
            }
        ]
    },
    {
        path:'register',
        component:RegisterviewComponent
    },
    {
        path:'login',
        component:LoginviewComponent
    }
    
]