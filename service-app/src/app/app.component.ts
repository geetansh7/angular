import { Component } from '@angular/core';
import { NewService } from '../newService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-app';
  name = '';
  constructor(private newservice: NewService){
  	this.name = 'In App Component: ' + this.newservice.display();
  }

  getNewName(){
  	this.name = 'In App Component: ' + this.newservice.display();
  }
}
