import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamicformgroup',
  templateUrl: './dynamicformgroup.component.html',
  styleUrls: ['./dynamicformgroup.component.css']
})
export class DynamicformgroupComponent implements OnInit {
	
	FormGroup: FormGroup;
	totalRows: number;

  constructor(private _fb: FormBuilder) { }

  ngOnInit():void {
  	this.FormGroup = this._fb.group({
  		itemRows: this._fb.array([this.initItemRows()]),
  	})
  	console.log(this.FormGroup);
  }

  initItemRows(){
  	return this._fb.group({
  		Name: [''],
  		Rollno: [''],
  		Class: [''],
  		Mobileno: ['']
  	})
  }

  addNewRow(){
  	const control = <FormArray>this.FormGroup.controls['itemRows'];
  	control.push(this.initItemRows());
  	console.log(this.FormGroup.controls['itemRows']);
  }

  deleteRow(index: number){
  	const control = <FormArray>this.FormGroup.controls['itemRows'];
  	console.log(control);
  	if(control != null){
  		this.totalRows = control.value.length;
  	}
  	if(this.totalRows > 1){
  		control.removeAt(index)
  	}else{
  		alert('One record is mandatory');
  		return false;
  	}
  }

}
