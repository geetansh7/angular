import { Injectable, Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<Component>{
	canDeactivate():boolean{
		return window.confirm('Are you sure to navigate?');
	}
}