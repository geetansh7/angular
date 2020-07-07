import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {
	
name = 'Geetansh Arora';
  constructor() {}
  display(){
  	return this.name;
  }
}
