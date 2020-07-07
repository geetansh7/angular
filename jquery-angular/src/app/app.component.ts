import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jquery-angular';

  ngOnInit(){
  	$("#div1").mouseover(function(){
  		$("#div1").css("color", "red");
  	});
  	$("#div1").mouseout(function(){
  		$("#div1").css("color", "blue");
  	});
  	$("button").click(function(){
  		var div = $("#div1");
  		div.animate({left: '500px'}, "slow");
  		div.animate({fontSize: '2em'}, "slow");
  	});
  }
}
