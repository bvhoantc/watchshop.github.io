import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ManagerProductService } from '../../services/manager-product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.models';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit,OnDestroy {
  public subscription!: Subscription;
  public product!: Product;
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    imagelink: new FormControl(),
    status: new FormControl(),
    describe: new FormControl(),
    gender: new FormControl(),
    type: new FormControl(),
    brand: new FormControl(),
    shellmaterial: new FormControl(),
    wirematerial: new FormControl(),

  })
  constructor(
    public manageService: ManagerProductService,
    public routerService: Router
    ) {}

  ngOnInit(): void {
    // this.product = new Product();
  }
  addProduct() {
    //console.log(this.productForm.value);
    
    this.subscription = this.manageService.addProduct(this.productForm.value).subscribe((data) => {
        //console.log(data);
        alert('Add product successful');
        this.routerService.navigateByUrl('admin/product/list');
      },
      (error) => {
        this.manageService.handlerror(error);
      }
    );
  }
  onReset(productForm: any){
    productForm.reset();
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
