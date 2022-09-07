import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category.class';
import { ManagerCategoryService } from '../../services/manager-category.service';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit,OnDestroy {

  public subscription!: Subscription;
  public category!: Category;
  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl()
  });
  constructor(
    public categoryService: ManagerCategoryService,
    public routerService: Router
  ) { }

  ngOnInit(): void {
  }
  addCategory(){
    // console.log(this.categoryForm.value);
    this.subscription = this.categoryService.addCategory(this.categoryForm.value).subscribe(data =>{
      alert('Add category successful');
      this.routerService.navigateByUrl('admin/category/list');
  },
  (error) => {
    this.categoryService.handlerror(error);
  }
);
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
