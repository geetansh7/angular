import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-storage';
  constructor(private cookie: CookieService){
  	this.cookie.set("name", "Geetansh Arora");
  	this.cookie.set("age", "26");
  }

  clearCookies(){
  	this.cookie.deleteAll();
  }
  clearCookie(){
  	this.cookie.delete("name");
  }
  getAllCookies(){
  	alert(JSON.stringify(this.cookie.getAll()));
  }
  getCookie(name){
  	alert(this.cookie.get(name));
  }
}
