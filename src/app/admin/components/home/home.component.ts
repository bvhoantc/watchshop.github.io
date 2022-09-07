import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public routerService: Router
  ) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem('key');
    this.routerService.navigateByUrl('admin');
  }
}
