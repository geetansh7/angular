import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


const COUNTRIES: {id: string, name: string, capital: string}[] = [{
  id: '1',
  name: 'India',
  capital: 'New Delhi'
},
{
  id: '2',
  name: 'Sri Lanka',
  capital: 'Colombo'
}];
let countriesObservable = of(COUNTRIES);
let countriesToDisplayObservable = of(COUNTRIES.concat({
  id: '3',
  name: 'Bangladesh',
  capital: 'Dhaka'
}));


@Injectable({
  providedIn: 'root'
})
export class UserService {
// student:{id: string, name: string}[];   //two ways to declare an array of objects
students:Array<{id: string, name: string}> = [{
	id: '1',
	name: 'geetansh'
},{
	id: '2',
	name: 'mayank'
}];

isAdmin: boolean = false;
  constructor() { }
  toggleAdmin(){
  	this.isAdmin = !this.isAdmin;
  	return this.isAdmin;
  }
  isAdminRights(){
  	return this.isAdmin;
  }
  getStudents(){
  	return this.students;
  }
  getStudentById(id: any){
    for(var i = 0; i<this.students.length; i++){
      if(this.students[i].id == id){
        return this.students[i];
      }
    }
  }
  getCountries():Observable<{id: string, name: string, capital: string}[]>{
    return countriesToDisplayObservable;
  }
  getCountry(id: string): Observable<{id: string, name: string, capital: string}>{
    return countriesObservable.pipe(map(countries => countries.find(country => country.id === id)));
  }
}
