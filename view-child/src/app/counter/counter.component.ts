import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count:number = 0;
  message: string = 'Counter: ' + this.count;

  constructor() { }

  ngOnInit() {
  }

  increaseByOne(){
  	this.count++;
  	this.message = 'Counter: '+this.count;
  }
  decreaseByOne(){
  	this.count--;
  	this.message = 'Counter: '+this.count;
  }

}
