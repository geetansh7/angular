import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  viewProviders: [SimpleService]
  //if we donot provide any provider, the ngModule provider works to inject service and ngmodule acts as the root injector so same instance of service is accessed everywhere
  //if we use provider in component, a new instance of service is injected by component injector for that component and its children
  //if we use viewProvider in component, a new instance of service is injected by component injector for that component and only for the children which are viewContent i.e. <app-child> in this component itself and not <ng-content> in this component. If we child components which are content projected means using <ng-content> we should use providers array of the component since it provides service to view child as well as content child.
})
export class ParentComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
