import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homedemo',
  templateUrl: './homedemo.component.html',
  styleUrls: ['./homedemo.component.css']
})
export class HomedemoComponent implements OnInit {

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  ngOnInit() { }    

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  stopSlider() {
    this.carousel.pause();
  }

}
