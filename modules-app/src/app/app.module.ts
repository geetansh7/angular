import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
/*import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module'; */ /* Importing here is eager loading */
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';

import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AuxiliaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*PersonModule,
    CompanyModule*/
  ],
  providers: [CustomPreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
		console.log("app module loaded");
	} 
}
