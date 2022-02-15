import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  productID:any;
  userID:any;
  userForm:any;
  product:any;
  userName:any;
  cart:any;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute) {
    this.productID = this.route.snapshot.params['id'];
    this.userID = sessionStorage.getItem('user_id');
    this.userName = sessionStorage.getItem('user_name');
    this.fetchProduct();
   }

  ngOnInit(): void {
    
  }
  fetchProduct(){
    this.http.get<any>("http://localhost:58792/api/Product/id="+this.productID)
    .subscribe(response => this.product = response);
  }

  onSubmitCart(userForm:NgForm){
    if (userForm.valid){
      let data : {Product_Id:number,Customer_Id:number,ZipCode:number,DeliveryDate:Date};
      data = {Product_Id:this.productID,Customer_Id:this.userID,ZipCode:userForm.value.ZipCode,DeliveryDate:userForm.value.DeliveryDate};
      console.log("User Form :")
      console.log(userForm.value.ZipCode);
      this.http.post<any>('http://localhost:36718/api/ProceedToBuy/AddToCart',data)
      .subscribe(response=>{
        console.log(response);
        this.cart = response;
        this.router.navigate(["/addedsuccessfully/"+this.cart.cartId+"/"+this.productID]);
      });
      
        
    }
  }

  postCart(){

  }
}
