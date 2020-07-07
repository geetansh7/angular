import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formarray-app';
  form: any;

  ngOnInit(){
    /* const arr = new FormArray([
      new FormControl('Ajeet', Validators.minLength(2)),
      new FormControl('Mohan')
    ]);
    console.log(arr.value);
    console.log(arr.status);

    const arr1 = new FormArray([
      new FormControl(),
      new FormControl()
    ]);
    arr1.setValue(['Ajeet', 'Mohan']);
    arr1.patchValue(['Ajeet']);
    arr1.reset(['Name', 'Lastname']);
    console.log(arr.value);
    console.log(arr.status); */


    this.form = new FormGroup({
    	ContactNos: new FormArray([
    		new FormControl('9988998890'),
    		new FormControl('9889988998')
    	])
    });

  }

    addContactNo(){
      this.form.get('ContactNos').push(new FormControl());
    }

    onSubmit(){
      console.log(this.form.get('ContactNos').value);
      console.log(this.form.value);
    }

    setPreset(){
      this.form.get('ContactNos').patchValue(['3213213211', '4321234321']);
    }
}
