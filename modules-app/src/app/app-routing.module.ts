import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';
/*import { CompanyComponent } from './company/company.component';*/
import { PreloadAllModules} from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';


const routes: Routes = [
{
	path: 'contactus',
	component: ContactusComponent
},
{
	path: '',
	redirectTo: '/company',
	pathMatch: 'full'
},
{
	path: 'company',
	loadChildren: './company/company.module#CompanyModule'
},
{
	path: 'person',
	loadChildren: './person/person.module#PersonModule',
	data: { preload: true, delay: true }
},
{
	path: 'auxiliary',
	component: AuxiliaryComponent,
	outlet: 'auxiliaryOutlet'
}
/*{
	path: 'company',
	component: CompanyComponent
}
{
	path: '**',
	component: PageNotFoundComponent
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	preloadingStrategy: CustomPreloadingStrategyService        //another value can be 																		 PreloadAllModules
  })],  //preloading is used to load the lazy loaded modules after the application has been started, PreloadAllModules means to load all the lazy loaded modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
