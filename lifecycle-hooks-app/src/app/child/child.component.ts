import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush  //onpush makes child only trigger changedetection(CD) when input bound property of parent changes, if not used CD triggers everytime parent changes even if it is not Input bound property in child
})
export class ChildComponent implements OnInit {
	
@Input() pData:string;
@Input() pData1:string;
@Input() arrList:any;
@Input() pData2: string;
currValue: string;
prevValue: string;
@Output() childValue: EventEmitter<string> = new EventEmitter();
arrListCopy: any;

  constructor() { 
  	console.log("child constructor called");
  }

  ngOnInit() {
    console.log("child ngOnInit called");
    this.currValue = "Geet";
    this.prevValue = "Meet";
    console.log(this.currValue);
    console.log(this.prevValue);
    this.arrListCopy = Array.from(this.arrList);
  }
//onchanges is called only if value of anyone input property is changed
  ngOnChanges(changes: any){
  	console.log("child ngonchanges called");
  	for(let propertyName in changes){
	  	console.log(changes);
	  	console.log(changes[propertyName]);
  		let change = changes[propertyName];
  		this.currValue = change.currentValue;
  		this.prevValue = change.previousValue;
  		console.log(propertyName + " : currentValue :- " + this.currValue + " : previousValue :- " + this.prevValue);
  	}
  }
//docheck is called if there is any change in value to any of the component
//diff b/w docheck and onchanges is that onchanges doesnot get triggered when reference is changed for example array n objects in js are changed by reference
  ngDoCheck(){
  debugger;
    console.log("child ngDocheck called");
    if(this.arrList.length !== this.arrListCopy.length){
      console.log("checked for changes and changed..");
      this.arrListCopy = Array.from(this.arrList);
    }
  }
  //contentinit called once after oninit and all the manipulations after a variable has been initialised in oninit, should be done here
  ngAfterContentInit(){
    console.log("child content init called");
  }
  //contentchecked called everytime after docheck and all the manipulations after a variable has been changed in docheck, should be done here
  ngAfterContentChecked(){
    console.log("child content checked called");
  }
  //view init and view checked called after grandchild's every hook has been called
  ngAfterViewInit(){
    console.log("child view init called");
  }
  ngAfterViewChecked(){
    console.log("child view checked called");
  }
  ngOnDestroy(){
    console.log("child destroy called");
  }

  changeValue(){
    this.childValue.emit("Child");
  }

}
