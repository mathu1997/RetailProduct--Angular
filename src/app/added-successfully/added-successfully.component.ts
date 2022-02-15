import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-added-successfully',
  templateUrl: './added-successfully.component.html',
  styleUrls: ['./added-successfully.component.css']
})
export class AddedSuccessfullyComponent implements OnInit {
  cartID:any;
  productID:any;
  userID:any;
  userForm:any;
  product:any;
  userName:any;
  vendor:any;
  cart:any;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute) {
    this.cartID = this.route.snapshot.params['cartid'];
    this.productID = this.route.snapshot.params['productid'];
    this.userID = sessionStorage.getItem('user_id');
    this.userName = sessionStorage.getItem('user_name');
    this.fetchProduct();
    this.fetchVendor();
    this.fetchCart();
   }
   fetchCart(){
    this.http.get<any>("http://localhost:36718/api/ProceedToBuy/id="+this.cartID)
    .subscribe(response => { console.log(response); this.cart = response;});
   }
   fetchProduct(){
    this.http.get<any>("http://localhost:58792/api/Product/id="+this.productID)
    .subscribe(response => { console.log(response); this.product = response;});
  }
  fetchVendor(){
    this.http.get<any>("http://localhost:9839/api/Vendor/id="+this.productID)
    .subscribe(response => {{ console.log(response); this.vendor = response;}; console.log(this.vendor)});
  }
  ngOnInit(): void {
  }

}
