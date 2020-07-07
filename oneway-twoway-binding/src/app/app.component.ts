import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneway-twoway-binding';

  firstname = 'geet';
  lastname = 'arora';

  firstdigit = 2;
  seconddigit = 4;

  data = '';
  data1 = '';

  cols=3;
}
