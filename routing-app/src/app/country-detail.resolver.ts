import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CountryDetailResolver implements Resolve<{id: string, name: string, capital: string}>{
	constructor(private userService: UserService, private router: Router){}
	resolve(route: ActivatedRouteSnapshot): Observable<{id: string, name: string, capital: string}>{
		let id = route.paramMap.get('country-id');
		console.log('Resolving for country id: ' + id);
		return this.userService.getCountry(id).pipe(map(country => {
			if(country){
				return country;
			}else{
				this.router.navigate(['/countrylist']);
				return null;
			}
		}));
	}
}