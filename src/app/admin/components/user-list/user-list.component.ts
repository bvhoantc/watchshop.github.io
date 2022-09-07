import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManagerUserService } from '../../services/manager-user.service';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public subcription!: Subscription;
  public user: User[] = [];
  public idDele: number =0;
  constructor(
    public userSerevice: ManagerUserService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.subcription = this.userSerevice.getAllUser().subscribe((data: any) =>{
      this.user = data;
    },error =>{
      this.userSerevice.handlerror(error);
    });
  }
  getid(id: number){
    this.idDele = id;
  }
  onDelete(){
    this.subcription = this.userSerevice.onDelete(this.idDele).subscribe((data: User) =>{
      this.updateAfterDelete(this.idDele);
    },error =>{
      this.userSerevice.handlerror(error);
    });
  }
  updateAfterDelete(id: number){
    for(let i = 0; i< this.user.length; i++){
      if(this.user[i].id == id){
        this.user.splice(i,1);
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
