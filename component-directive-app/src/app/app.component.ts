import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'component-directive-app';

  students = [{
  	studentid: 1,
  	name: 'Geetansh'
  }];

  countryDetails = [
  {
  'country': 'India',
  'people': [
  {name: 'Geetansh'},
  {name: 'Mayank'},
  {name: 'Parth'}
  ]
  }];

  getMoreStudents(){
  	this.students = [
  	{
  		studentid: 1,
  		name: 'Geetansh'
  	},{
  		studentid: 2,
  		name: 'Mayank'
  	}];
  }

  trackByStudentid(index: number, student: any): string{
  		return student.studentid;
  }
}
