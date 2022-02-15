import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
  export class AddRatingComponent implements OnInit {
    cartID:any;
    productID:any;
    ratingForm:any;
    product:any;
    constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute) {
      this.productID = this.route.snapshot.params['productid'];
      this.fetchProduct();
      }
    
     fetchProduct(){
      this.http.get<any>("http://localhost:58792/api/Product/id="+this.productID)
      .subscribe(response => { console.log(response); this.product = response;});
    }

  

  ngOnInit(): void {
  }
  onSubmitCart(ratingForm:NgForm){
    let data : {Product_Id:number,Rating:number};
     data = {Product_Id:this.productID,Rating:ratingForm.value.Rating};
      console.log(data);
      this.http.post<any>('http://localhost:58792/AddProductRating',data)
      .subscribe(response=>{
        console.log(response);
         this.router.navigate(["/ratingadded"]); 
      });
      }
      
  
   
    }