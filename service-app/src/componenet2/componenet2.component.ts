import { Component, OnInit } from '@angular/core';
import { NewService } from '../newService.service'

@Component({
  selector: 'app-componenet2',
  templateUrl: './componenet2.component.html',
  styleUrls: ['./componenet2.component.css'],
  providers: [NewService]                 //this is used when we want to make a new instance of service otherwise the service is singleton(also if this is defined in parent then by default child also has the same instance of service)
})
export class Componenet2Component implements OnInit {
name = '';
  constructor(private newService: NewService) { 
    this.name = 'In Componenet2:' + this.newService.name;
  }

  changeName(){
    this.newService.name = 'Mayank Arora';
    this.getNewName();
  }
  getNewName(){
    this.name = 'In Componenet2: ' + this.newService.name;
  }

  ngOnInit() {
  }

}
