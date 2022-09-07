import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerUserService } from 'src/app/admin/services/manager-user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class LoginviewComponent implements OnInit {

  public subcription!: Subscription;
  title = 'watchshop';
  @ViewChild('username') name!:string;
  @ViewChild('password') pass!:string;
  public error: number =0;
  public islogin:number =  0;
  constructor(
    public routerService:Router,
    public userService: ManagerUserService
  ) { }

  ngOnInit(): void {
    this.getlogin();
  }
  onLogin(username: string,password: string ){
    this.subcription = this.userService.getAllUser().subscribe(data =>{
      for(let i = 0; i< data.length; i++){
      if(username == data[i].username && password == data[i].password && data[i].type =='customer'){
        localStorage.setItem('key2',username);
        this.islogin = 1;
        this.routerService.navigateByUrl('');
      }
      else
      {
        this.error = -1;
      }
    }
    })
  }
  getlogin(){
    console.log(this.islogin);
  }

}
