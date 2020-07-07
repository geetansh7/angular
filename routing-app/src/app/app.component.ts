import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  isAdmin: boolean = false;

  constructor(private router: Router, private userService: UserService) { 
  	//this.router.navigate(['/student']);
  }
  toggleAdmin(){
  	this.isAdmin = this.userService.toggleAdmin();
  }
}
