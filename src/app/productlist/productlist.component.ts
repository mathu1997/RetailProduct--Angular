import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  Search:String = "";
  productService: any= this.fetchProduct();
  // [{Id:1,Price:1500,Name:"Cosmic Byte headphones",Description:"Giving you next level gaming experience",Image_name:"../assets/Images/CosmicByteHeadphones.jpeg",Rating:4}];

  pservice = this.productService;
  errmsg:string = "";
  constructor(private route:ActivatedRoute,private http:HttpClient) {
    
   }
  fetchProduct(){
    this.http.get<any>("http://localhost:58792/api/Product").subscribe(
      response => {
        console.log(response);
        this.productService = response;
        this.pservice = this.productService;
        console.log(this.pservice[0]);
      }
    );
    return this.productService;
  }
  
  ngOnInit(): void {
    this.pservice = this.productService;
  }
  

  getStars(rating:number):string[]{
    let starts = []
    for(let i=0;i<5;i++){
      if (i<rating)
        starts.push("changed");
      else
        starts.push("");
    }
    return starts;
  }
  
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onSearchChange(Search:string){
   // let Search = this.getValue(SearchEvent);
    this.pservice = [];
    if (Search==""){
      this.pservice = this.productService;
      
    }
      
    else{
      for (let product of this.productService){
        if (product.name.toLowerCase().match(Search.toLowerCase())){
          this.pservice.push(product);
        }
      }
    }
    if (this.pservice.length==0){
      this.errmsg = "No Results Found";
    }
    else{
      this.errmsg="";
    }
  }

  onSearchId(Search:string){
    //let Search = this.getValue(SearchEvent);
    this.pservice = [];
    if (!Search){
      this.pservice = this.productService;
    }
      
    else{
      for (let product of this.productService){
        if (product.id==Search){
          this.pservice.push(product);
        }
      }
    }
    if (this.pservice.length==0){
      this.errmsg = "No Results Found";
    }
    else{
      this.errmsg="";
    }
  }

}
