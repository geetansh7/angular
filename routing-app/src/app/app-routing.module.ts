import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { DeactivateGuard } from './deactivate.guard';
import { ActivatechildGuard } from './activatechild.guard';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';
import { CountryDetailResolver } from './country-detail.resolver';

const routes: Routes = [{
	path: 'student',
	component: StudentComponent
},
{
	path: 'studentdetails',
	component: StudentDetailsComponent,
	canDeactivate: [DeactivateGuard],
	pathMatch: 'full'         //here pathmatch is required because routeguard was working even for path: 'studentdetails/:id' which we donot want
},
{
	path: 'studentdetails/:id',
	component: StudentDetailsComponent
},
{
	path: '',
	redirectTo: 'studentdetails',
	pathMatch: 'full'
},
{
	path: 'teacherdetails',
	component: TeacherComponent,
	canActivateChild: [ActivatechildGuard],
	children: [{
		path: 'addteacher', component: AddTeacherComponent
	}]
},
{
	path: 'countrylist',
	component: CountryListComponent,
	children: [{
		path: 'detail/:country-id',
		component: CountryDetailComponent,
		resolve: {             
			countryDetail: CountryDetailResolver
		} 
		//resolver retrieves data before the activation of a route. The Resolver is really set up to be used for retrieving data. It automatically adds the data to a data[] that you can then access from the routed component to get that data: this.route.snapshot.data['movie']
		//resolve retrieves data before activation of routes and only navigates if data exists on that page. //difference between activate guard and resolve is that, to check if a user is loggedin 'activate guard' will work, but even if someone is loggedin or not 'resolve guard' checks if data is not available user should not navigate //Activate gets called before Resolver
	}]	
},
{
	path: 'admin',
	component: AdminComponent,
	canActivate: [ActivateGuard]	
},
{
	path: '**',
	redirectTo: 'student'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
