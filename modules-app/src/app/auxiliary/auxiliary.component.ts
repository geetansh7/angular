import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.css']
})
export class AuxiliaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close(){
  	this.router.navigate([{outlets: {auxiliaryOutlet: null}}]);
  }

}
