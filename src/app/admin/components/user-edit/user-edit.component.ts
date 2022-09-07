import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.class';
import { ManagerUserService } from '../../services/manager-user.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit,OnDestroy {

  public user: User[] = [];
  public subcrip!: Subscription;
  public scriptedit!: Subscription;
  public id:number = 0;
  userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    type: new FormControl()
  })
  constructor(
    public userService: ManagerUserService,
    public activatedRouter: ActivatedRoute,
    public routerService: Router
  ) { }

  ngOnInit(): void {
    this.handleParam();
  }
  handleParam(){
    this.id = this.activatedRouter.snapshot.params['id'];
    this.subcrip = this.userService.getAllUserByID(this.id).subscribe(data =>{
      this.userForm = new FormGroup({
        username: new FormControl(data['username']),
        password: new FormControl(data['password']),
        type: new FormControl(data['type'])
      })
    })
  }
  editUser(){
    this.scriptedit = this.userService.updateUser(this.id, this.userForm.value).subscribe(data =>{
      alert('Edit successful');
      this.routerService.navigateByUrl('admin/user/list');
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
