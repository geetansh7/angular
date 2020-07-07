import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
slides = [{
  image: "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png"
  },
  {
  	image: "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png"
  }];

  constructor() { }

  ngOnInit() {
  }

}
