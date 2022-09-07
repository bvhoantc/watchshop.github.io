import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ManagerUserService } from 'src/app/admin/services/manager-user.service';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/admin/components/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public error: number =0;
  public islogin:number =  0;
  public loginName: any;
  constructor(
    public routerService:Router,
    public userService: ManagerUserService
  ){
  }
  ngOnInit(): void {
    // console.log('helo')
    this.checklogin();
  }
  checklogin(){
    
    if(localStorage.getItem('key2')){
      this.islogin = 1;
      this.loginName = localStorage.getItem('key2');
      // console.log(this.loginName);
    }
  }
  onLogout(){
    localStorage.removeItem('key2');
    
  }
  // public notLogin:boolean = false;
}
