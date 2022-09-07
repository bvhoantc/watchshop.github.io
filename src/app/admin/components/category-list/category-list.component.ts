import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category.class';
import { ManagerCategoryService } from '../../services/manager-category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit,OnDestroy {

  public subcription!: Subscription;
  public category:Category[] =[];
  public idDele: number = 0;
  constructor(
    public categoryService: ManagerCategoryService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.subcription = this.categoryService.getAllCategory().subscribe((data: any) =>{
      this.category = data;
    },error =>{
      this.categoryService.handlerror(error);
    });
  }
  getid(id: number){
    this.idDele = id;
  }
  onDelete(){
    // console.log(this.idDele);
    this.subcription = this.categoryService.onDelete(this.idDele).subscribe(data =>{
      this.updateAfterDelete(this.idDele);
    },error =>{
      this.categoryService.handlerror(error);
    });
  }
  updateAfterDelete(id: number){
    for(var i = 0; i< this.category.length; i++ ){
      if(this.category[i].id ==id){
        this.category.splice(i,1);
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
