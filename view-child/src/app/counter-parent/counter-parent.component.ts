import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {

@ViewChild(CounterComponent, {static: false}) counterComponent:CounterComponent;
@ViewChild(ChangeColorDirective, {static: false}) changeColorDirective: ChangeColorDirective;

  constructor() { }

  ngOnInit() {
  }

  increase(){
  	this.counterComponent.increaseByOne();
  }
  decrease(){
  	this.counterComponent.decreaseByOne();
  }

  changeColor(color:string){
  	this.changeColorDirective.changeColor(color);
  }

}
