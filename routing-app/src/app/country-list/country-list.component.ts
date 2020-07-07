import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
countries: Observable<{id: string, name: string, capital: string}[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.countries = this.userService.getCountries();
  }

}
