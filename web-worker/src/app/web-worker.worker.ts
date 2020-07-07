/// <reference lib="webworker" />

addEventListener('message', ({ data }) => { //fetches the message sent by the app, modifies it
/*while(1===1){
	console.log('1');
}*/
  const response = `worker response to ${data}`;
  postMessage(response);                            //sends the message back to app
});
