import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'lifecycle-hooks-app';
  input1 = 'hello';
  msg: string;
  myArr: any = ["Angular5", "Angular6", "Angular7"];
  isVisible: boolean = true;
  changedValue: string = "hello";
  childValue: string;

  ngOnInit(){
  	console.log("parent ngOnInit called");
  }

  constructor(){
  	console.log("parent constructor called");
  	this.msg = "newMsg";
  	console.log(this.msg);
  }
  ngOnChanges(){
  	console.log("parent ngonchanges called");  //onchanges gets called only on Input() properties in child components
  }
  addValue(){
  	this.myArr.push("Angular8");
  }
  changeMessage(){
  	this.msg = "newMsg1";
  }
  toggleVisible(){
    this.isVisible = !this.isVisible;
  }
  changeValue(){
    this.changedValue = "hi";
    //delete[this.changedValue]; //this will not trigger onchanges because reference is changed here
  }
  ngDoCheck(){
    console.log("parent ngDocheck called");
  }
  
  ngAfterContentInit(){
    console.log("parent content init called");
  }
  
  ngAfterContentChecked(){
    console.log("parent content checked called");
  }
  
  ngAfterViewInit(){
    console.log("parent view init called");
  }
  ngAfterViewChecked(){
    console.log("parent view checked called");
  }
  ngOnDestroy(){
    console.log("parent destroy called");
  }

  changedChildValue(event){
    console.log('changedChildValue: ' + event);
    this.childValue = event;
  }

  //Child components are stateless(pure) components. Parent component is stateful(impure) component thus lifecycle hook doesnot work from child to parent i.e. using Output property. Only eventemitter works from child to parent.
}
