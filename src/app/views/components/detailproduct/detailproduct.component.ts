import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/views/services/product.service';
import { Product } from 'src/app/views/models/product.class';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  public product: Product[] = [];
  constructor(
    public activedRoute: ActivatedRoute,
    public productService: ProductService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.handleParam();
    //console.log(this.product);
  }
  handleParam(){
    this.activedRoute.params.subscribe(data =>{
    // console.log(data['id']);
    var result:any;
    let id = (+ data['id']);
    this.product= this.productService.getAllProductByID(id);
    //console.log(this.product)
  });
}
backtolist(){
    // this.router.navigate(['index']);
    this.router.navigate([''],{
      relativeTo:this.activedRoute.parent
    })
}

}
