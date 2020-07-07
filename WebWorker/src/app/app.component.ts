import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker';

constructor(){

//Web workers allow you to run CPU-intensive computations in a background thread, freeing the main thread to update the user interface. It increases the application's performance
//instead of performing CPU intensive task here, perform it in the web worker

/*while(1===1){
	console.log('1');
}*/

  if(typeof Worker !== 'undefined'){
  	const worker = new Worker('./web-worker.worker.ts', { type: 'module' });
  	worker.onmessage = ({data}) => { //fetches the message returned back from web worker
  		console.log(`page got message: ${data}`); 
  	}
  	worker.postMessage('hello');  //passes the message to web worker
  } else {
	  // Web workers are not supported in this environment.
	  // You should add a fallback so that your program still executes correctly.
	}
}
}
