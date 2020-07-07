import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-material-app';
  regiForm: FormGroup;
  slides = [{
  	image: "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png"
  },
  {
  	image: "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png"
  }];

  ngOnInit(){
    this.regiForm = new FormGroup({
       firstname: new FormControl('',  Validators.required),
       lastname: new FormControl()
    });
  }
}
