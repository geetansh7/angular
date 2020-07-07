import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-app';
  dob = new Date();
  salary = .50199;
  address = "e-20, krishna nagar, satanam road, delhi - 110051";
  residents = ["Dad", "Mom", "Brother", "Sister", "Brother"];
  employee = {name: 'Geetansh', gender: 'Male'};
  student = {name: 'Lakshita', gender: 'Female'};
}
