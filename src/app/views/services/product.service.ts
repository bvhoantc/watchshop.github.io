import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product[] =[
    {
      id: 1,
      name: 'Đồng hồ kim Nữ dây kim loại Michael Kors MK5616 Vàng hồng',
      price: 1000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/MK5616.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: 'Nữ',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'

    },
    {
      id: 2,
      name: 'Đồng hồ kim Nữ dây kim loại Michael Kors MK4652 Demi',
      price: 2000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/MK4652-5.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: 'Nữ',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    {
      id: 3,
      name: 'Đồng hồ kim Nữ dây kim loại Michael Kors MK4642 Bạc',
      price: 3000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/MK4642-5.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender:'Nữ',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    {
      id: 4,
      name: 'Đồng hồ tự động Nam dây da Fossil ME3171 Xanh dương',
      price: 4000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/ME3171.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: 'Nam',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    {
      id: 5,
      name: 'Đồng hồ tự động Nam dây da Fossil ME3161 Nâu',
      price: 5000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/ME3161.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: 'Nam',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    {
      id: 6,
      name: 'Đồng hồ tự động Nam dây da Fossil ME3110 Nâu',
      price: 5000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2022/07/ME3110.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: 'Nam',
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    {
      id: 7,
      name: 'Đồng hồ Cặp Onlyou 81117GLA Máy Pin Dây Da',
      price: 6000000,
      imagelink: 'https://watchshop.com.vn/wp-content/uploads/2021/08/1-2.jpg',
      status: true,
      describe: 'hàng chính hãng, mẫu mã đẹp, thiết kế thời trang, giao hàng tận nơi tại Vietnam Watchshop. Mua Đồng Hồ và Trang Sức Nam Nữ Chính Hãng tại Vietnam Watchshop',
      gender: "Cặp đôi",
      type: 'pin',
      brand: 'Michael Kors',
      shellmeterial: 'Thép không gỉ',
      wirematerial: ' Dây kim loại'
    },
    
  ];
  constructor() { }
  getAllProduct(){
    return this.product;
  }
  getAllProductByID(id: number){
    var result = [];
    for(var i = 0; i < this.product.length; i++){
      if(this.product[i].id == id)
      {
        result.push(this.product[i]);
        break;
      }
    }
    return result;
  }
}
