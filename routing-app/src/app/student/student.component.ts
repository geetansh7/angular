import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
students: Array<{}>;
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.students = this.userService.getStudents();
  }

}
