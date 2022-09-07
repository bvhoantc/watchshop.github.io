import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/views/models/product.class';
import { ManagerProductService } from '../../services/manager-product.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  public product: Product[] = [];
  public subcrip!: Subscription;
  public scriptedit!: Subscription;
  public id:number = 0;
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    imagelink: new FormControl(),
    status: new FormControl(),
    describe: new FormControl(),
    gender: new FormControl(),
    type: new FormControl(),
    brand: new FormControl(),
    shellmeterial: new FormControl(),
    wirematerial: new FormControl(),

  })
  constructor(
    public activatedRouter: ActivatedRoute,
    public manageService: ManagerProductService,
    public routerService: Router
  ) {}

  ngOnInit(): void {
    this.handleParam();
  }
  handleParam() {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.subcrip = this.manageService.getAllProductByID(this.id).subscribe(data =>{
      this.productForm =new FormGroup({
        name: new FormControl(data['name']),
        price: new FormControl(data['price']),
        imagelink: new FormControl(data['imagelink']),
        status: new FormControl(data['status']),
        describe: new FormControl(data['describe']),
        gender: new FormControl(data['gender']),
        type: new FormControl(data['type']),
        brand: new FormControl(data['brand']),
        shellmeterial: new FormControl(data['shellmeterial']),
        wirematerial: new FormControl(data['wirematerial']),
      })
    })
  }
  editProduct(){
    this.scriptedit = this.manageService.updateProduct(this.id,this.productForm.value).subscribe(data =>{
      alert('Edit successful');
      this.routerService.navigateByUrl('admin/product/list');
    })
  }
  onReset(productForm: any){
    productForm.reset();
  }
  ngOnDestroy(): void {
    if (this.subcrip) {
      this.subcrip.unsubscribe;
    }
    if(this.scriptedit){
      this.scriptedit.unsubscribe;
    }
  }
}
