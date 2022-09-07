import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/views/services/product.service';
import { Product } from 'src/app/views/models/product.class';
@Component({
  selector: 'app-otherproduct',
  templateUrl: './otherproduct.component.html',
  styleUrls: ['./otherproduct.component.css']
})
export class OtherproductComponent implements OnInit {

  public product: Product[] = [];
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.product = this.productService.getAllProduct();
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
    
  }
}
