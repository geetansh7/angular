import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-app';

  signupForm: FormGroup;
  FirstName:string = '';
  LastName:string = '';
  Email:string = '';
  Password:string = '';

  constructor(private frmBuilder: FormBuilder){
  	this.signupForm = frmBuilder.group({
  		fname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15)])),
  		lname: new FormControl('', Validators.minLength(5)),
		email: new FormControl('', Validators.email),
		password: new FormControl('', Validators.required),
  	});
  }

  ngOnInit(){
    this.signupForm.statusChanges.subscribe(status => {
      console.log('FormStatus: ' + status);
    });
    this.signupForm.valueChanges.subscribe((form:any) => {
      console.log(form);
    });
    this.signupForm.get('email').statusChanges.subscribe(status=>{
      console.log('EmailStatus: ' + status);
    });
    this.signupForm.get('lname').valueChanges.subscribe(value=>{
      console.log('Lname value: ' + value);
    });
  }

  Register(signupForm: any){
  	this.FirstName = signupForm.controls.fname.value;
  	this.LastName = signupForm.controls.lname.value;
  	console.log(this.FirstName);
  	console.log(signupForm);
    console.log(this.signupForm.get('fname').value);
  }

  resetForm(){
    this.signupForm.reset();
    /* this.signupForm.reset({
      fname: 'Geetansh',
      email: 'xyz@gmail.com'
    }); */
  }

  fillData(){
    this.signupForm.setValue({
      fname: 'Geetansh',
      lname: 'Arora',
      email: 'xyz@gmail.com',
      password: 'Avc'
    });
  }

  patchData(){
    this.signupForm.patchValue({
      fname: 'Geetansh1',
      email: 'geet@yahoo.com'
    });
  }


}
