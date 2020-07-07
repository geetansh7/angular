import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-style-class-app';
  blackColor = 'black';
  getClass(){
  	return ['one', 'two'];
  }
}
