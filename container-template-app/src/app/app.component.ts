import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'container-template-app';

  displayTemplate = false;

  books = [{id: 1, name: 'book1'}, {id: 2, name: 'book2'}];

  obj={
  	data: 'Hi'
  };
}
