import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerUserService } from '../../services/manager-user.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  public subcription!: Subscription;
  public error: number =0;
  @ViewChild('username') username!: string;
  @ViewChild('password') password!: string;
  public user: User[] =[];
  constructor(
    public userService: ManagerUserService,
    public routerService: Router
  ) { }

  ngOnInit(): void {

  }
  onlogin(username: string, password: string){
    this.subcription = this.userService.getAllUser().subscribe((data: any) =>{
      this.user = data;
      for(let i =0 ; i<this.user.length; i++){
        if(username == this.user[i].username && password == this.user[i].password && this.user[i].type =='admin' ){
          localStorage.setItem('key',username)
          alert('Login successful!');
          this.routerService.navigateByUrl('admin/product/list');
          break;
        }
        else{
          this.error = -1;
        }
      }
    },error =>{
      this.userService.handlerror(error);
    });
  }
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe;
    }
  }

}
