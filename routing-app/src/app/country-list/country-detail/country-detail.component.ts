import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
	country: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.route.snapshot.data['countryDetail']);  //resolve initialises the data fetched into the defined variable into router snapshot data which can be retrieved later.
  	/* let id = this.route.snapshot.paramMap.get('country-id');
  	alert(id);
  	this.userService.getCountry(id).subscribe(country => this.country = country); */
  	this.route.paramMap.subscribe(params => {
  		alert(params.get('country-id'));
  		this.userService.getCountry(params.get('country-id')).subscribe(country => this.country = country);
  	});
  }

}
