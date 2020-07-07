import { Component, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker ';

  constructor(appRef: ApplicationRef, updates: SwUpdate){
  // Allow the app to stabilize first, before starting polling for updates with `interval()`.
  const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
  const everySixHours$ = interval(6 * 60 * 60 * 1000);
  const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
  everySixHoursOnceAppIsStable$.subscribe(()=> updates.checkForUpdate());


  	updates.available.subscribe(event => {
  		console.log('current version is ', event.current);
  		console.log('available version is ', event.available);
  		if (confirm("Do you want to update app?")) {
        	updates.activateUpdate().then(() => document.location.reload());
        	//Doing this could break lazy-loading in currently running apps, especially if the lazy-loaded chunks use filenames with hashes, which change every version.
      	}
  	});
  	updates.activated.subscribe(event => {
  		console.log('old version was ', event.previous);
  		console.log('new version is ', event.current);
  	});
  }

 /*Constantly polling for updates, e.g. with interval(), will prevent the app from stabilizing and the ServiceWorker script will never be registered with the browser.

You can avoid that by waiting for the app to stabilize first, before starting to poll for updates (as shown in the example above).*/
}
