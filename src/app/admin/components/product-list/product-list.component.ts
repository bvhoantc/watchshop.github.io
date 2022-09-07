import { Component, OnInit,OnDestroy } from '@angular/core';
import { ManagerProductService } from '../../services/manager-product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.models';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  public subcription!: Subscription;
  public product:Product[] =[];
  public idDele: number =0;
  constructor(
    public manageService: ManagerProductService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.subcription = this.manageService.getAllProduct().subscribe((data: any) =>{
      this.product = data;
    },error =>{
      this.manageService.handlerror(error);
    });
  }
  getid(id: number){
    this.idDele = id;
  }
  onDelete(){
    this.subcription = this.manageService.onDelete(this.idDele).subscribe((data: Product) =>{
      this.updateAfterDelete(this.idDele);
    },error =>{
      this.manageService.handlerror(error);
    });
  }
  updateAfterDelete(id: number){
    for(var i=0; i<this.product.length; i++){
      if(this.product[i].id ==id){
        this.product.splice(i,1);
        break;
      }
    }
  }
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }

}
