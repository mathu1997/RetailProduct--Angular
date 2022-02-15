import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    productID:any;
    userID:any;
    userForm:any;
    product:any;
    userName:any;
    cart:any;
    constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute) {
   
      this.userName = sessionStorage.getItem('user_name');
      
     }

  

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}