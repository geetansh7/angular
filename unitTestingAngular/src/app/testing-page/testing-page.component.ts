import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent implements OnInit {
	
  title = 'Beginner';
  count = 0;
  countries = ['AUS'];

  constructor() {
  }

  ngOnInit() {
  }

  compute(){
  	this.count++;
  	return this.count;
  }
  addCountry(cnt){
  	this.countries.push(cnt);
  }
  getCountries(){
  	return this.countries;
  }
}
