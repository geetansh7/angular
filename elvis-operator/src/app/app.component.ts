import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `{{num+2}}<br>
  {{city.name}}<br>
  {{city.pin}}<br>
  {{name}}<br>
  {{company && company.name}}<br>
  {{company?.city}}<br>
  {{v}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elvis-operator';
  num:number = 2;
  name:number = "Delhi";         //it just shows a warning but works fine
  city:any = {name: 'Delhi'};
  company: Observable<any>;					//error because data is filled after 2sec so use elvis operator 								or safe navigation operator(?)
  v:any;						//variable is empty or undefined so it shows empty on UI
  constructor(){
  	setTimeout(function(){
  		this.company = {
  			name: 'Google',
  			city: 'Gurgaon'
  		}
  		console.log("Company city: " + this.company.city);
  	}, 2000);
  }
}
