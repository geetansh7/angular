import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer, pipe } from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any>{
  	if(route.data && route.data['preload']){
  		console.log('Preload path: ' + route.path + ', preload delay: ' + route.data['delay']);
  		if(route.data['delay']){
  			return timer(5000).pipe(mergeMap(() => load()));
  		}
  	}else{
  		return of(null);
  	}
  }
}
