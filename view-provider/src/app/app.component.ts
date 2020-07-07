import { Component } from '@angular/core';

class MyProvider {
  constructor() {
    console.log("provider property");
  }
  VarMyProvider = "VarMyProvider";
}

class MyProvider1 {
  VarMyProvider1 = "VarMyProvider1";
  constructor() {
  }
  getString(name) {
    console.log("provider property1" + name);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MyProvider, MyProvider1] //in this case it is same as providers, but difference is that - If you were projecting content within <ng-content>...</ng-content> provider would not be injected in the projected content if using viewProvider
})
export class AppComponent {
  title = 'view-provider';
  constructor(public obj: MyProvider, public obj1: MyProvider1){
  	obj1.getString(" SahosoftTutorials.com");
    console.log(obj.VarMyProvider);
    console.log(obj1.VarMyProvider1);
  }
}

