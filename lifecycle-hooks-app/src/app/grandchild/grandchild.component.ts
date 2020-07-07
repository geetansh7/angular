import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
	
@Input() cData: string;

  constructor() { 
  	console.log("grandchild constructor called");
  }

  ngOnInit() {
    console.log("grandchild ngOnInit called");
  }

  ngOnChanges(changes: any){
  	console.log("grandchild ngonchanges called");
  	for(let propertyName in changes){
	  	console.log(changes);
	  	console.log(changes[propertyName]);
  		let change = changes[propertyName];
  		var currValue = change.currentValue;
  		var prevValue = change.previousValue;
  		console.log(propertyName + " : grandchild currentValue :- " + currValue + " : grandchild previousValue :- " + prevValue);
  	}
  }
  ngDoCheck(){
    console.log("grandchild ngDocheck called");
  }
  ngAfterContentInit(){
    console.log("grandchild content init called");
  }
  ngAfterContentChecked(){
    console.log("grandchild content checked called");
  }
  ngAfterViewInit(){
    console.log("grandchild view init called");
  }
  ngAfterViewChecked(){
    console.log("grandchild view checked called");
  }
  ngOnDestroy(){
    console.log("grandchild destroy called");
  }

}
