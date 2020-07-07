import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
student: {id: string, name: string};
  constructor(private location: Location, private route: ActivatedRoute, private userService: UserService){  }

  ngOnInit() {
  //two methods to get parameters from route 1. params/paramMap(dynamic and can be subscribed) if used with route 2. (static) if used with snapshot
  //alert(this.route.snapshot.params.id);
  //this.student = this.userService.getStudentById(this.route.snapshot.params.id);

  //we can also use paramMap with snapshot instead of route's paramMap
	//alert(this.route.snapshot.paramMap.get('id'));
  	//this.student = this.userService.getStudentById(this.route.snapshot.paramMap.get('id'));

  	// this.route.paramMap.subscribe(params=>{
  		//alert(typeof(params.get('id')));
  		// this.student = this.userService.getStudentById(params.get('id'));
  	// });

  	this.route.params.subscribe(params=>{
  		alert(params.id);
  		this.student = this.userService.getStudentById(params.id);
  	});

/*If you intend not to update your URL parameter within the same component you are accessing it, then you can use the snapshot. As the name suggests, the parameter would only be accessed once, when the component loads. Hence, it won't be updated, even if you change its value from within the same component*/
  	
  }

  goBack(){
  	this.location.back();
  }

}
