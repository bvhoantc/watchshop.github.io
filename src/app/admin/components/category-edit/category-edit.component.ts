import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerCategoryService } from '../../services/manager-category.service';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit,OnDestroy {

  public subcrip!: Subscription;
  public scriptedit!: Subscription;
  public id:number = 0;
  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl()
  })
  constructor(
    public categoryService: ManagerCategoryService,
    public routerService: Router,
    public activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.handleParam();
  }
  handleParam(){
    this.id = this.activatedRouter.snapshot.params['id'];
    // console.log(this.id);
    this.subcrip = this.categoryService.getAllCategoryByID(this.id).subscribe(data =>{
      this.categoryForm = new FormGroup({
        categoryName: new FormControl(data['categoryName'])
      })
    })
  }
  editCategory(){
    this.scriptedit = this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(data =>{
      alert('Edit successful');
      this.routerService.navigateByUrl('admin/category/list');
    })
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
