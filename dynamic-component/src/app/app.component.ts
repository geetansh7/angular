import { Component, ComponentFactory, ComponentRef, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;
  @ViewChild('loadComponent', {read: ViewContainerRef, static: false}) entry: ViewContainerRef;
  /*The static option for @ViewChild() and @ContentChild() queries determines when the query results become available.

With static queries (static: true), the query resolves once the view has been created, but before change detection runs. The result, though, will never be updated to reflect changes to your view, such as changes to ngIf and ngFor blocks.

With dynamic queries (static: false), the query resolves after either ngAfterViewInit() or ngAfterContentInit() for @ViewChild() and @ContentChild() respectively. The result will be updated for changes to your view, such as changes to ngIf and ngFor blocks.*/
   data = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ];

  constructor(private resolver: ComponentFactoryResolver){}
  selectName(id : number) {
 	this.createComponent(id);
  }

  createComponent(Id: number){
  	this.entry.clear();
  	if(Id == 1){
  		const factory = this.resolver.resolveComponentFactory(StudentComponent);
  		this.componentRef = this.entry.createComponent(factory);
  	}else if(Id == 2){
  		const factory = this.resolver.resolveComponentFactory(ParentComponent);
  		this.componentRef = this.entry.createComponent(factory);
  	}
  	this.componentRef.instance.message = "Called by appComponent";
  }
 /*Clear the container.
Create a factory for StudentInfoComponent and ParentInfoComponent.
Create a component using the factory.
Pass the value for message variable using a component reference instance method.*/

ngOnDestroy(){
	this.componentRef.destroy();
}
}
