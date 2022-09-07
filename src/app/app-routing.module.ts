import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ViewProductModule } from './views/view-product.module';
import { ManagerProductModule } from './admin/manager-product.module';
const routes: Routes = [
  {
    path:'**',
    component:ErrorComponent
  }
  // {
  //   path:'product/:id',
  //   component:DetailproductComponent
  // }

];

@NgModule({
  imports: [
    ViewProductModule,
    ManagerProductModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
