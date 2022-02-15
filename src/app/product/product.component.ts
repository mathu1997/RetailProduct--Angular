import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  constructor(){

  }
  ngOnInit(){

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
  
}
