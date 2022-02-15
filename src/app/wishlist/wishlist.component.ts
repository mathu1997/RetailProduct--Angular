import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  productID:any;
  userID:any;
  userForm:any;
  product:any;
  userName:any;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute) {
    this.productID = this.route.snapshot.params['id'];
    this.userID = sessionStorage.getItem('user_id');
   }

  ngOnInit(): void {
  }
  onSubmitWishList(){
    // http://localhost:36718/api/ProceedToBuy/AddToWishlist
    this.http.post<any>(' http://localhost:36718/api/ProceedToBuy/AddToWishlist',{CustomerId:this.userID,ProductId:this.productID,Quantity:1})
      .subscribe(response=>{
        console.log(response);
        this.opensweetalert();
        
      });
  }
  opensweetalert()
  {
    
    Swal.fire({
      title: 'Success!!',
      text: 'The product has been successfully added to WishList!!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Continue shopping'
    }).then((result) => {
      
      this.router.navigate(['/products']);
    })
  }
}
