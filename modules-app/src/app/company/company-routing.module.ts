import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyListComponent} from '../company-list/company-list.component';
import {CompanyComponent} from './company.component';


const routes: Routes = [
{
	path: '',
	component: CompanyComponent,
	children: [
		{
			path: 'company-list',
			component: CompanyListComponent
		}
		]
},
/*{
	path: 'company-list',
	component: CompanyListComponent
}*/  //this will call the component in parent router-outlet
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
