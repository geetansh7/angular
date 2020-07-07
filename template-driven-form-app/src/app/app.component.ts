import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form-app';

  Register(regForm: any){
  	debugger;
  	var firstname = regForm.controls.firstname.value;
  	var lastname = regForm.controls.lastname.value;
  	var email = regForm.controls.email.value;
  	console.log(regForm);
  }
}
