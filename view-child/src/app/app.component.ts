import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'view-child-app';
  @ViewChild('para1', {static :false}) elm: ElementRef;
  ngAfterViewInit(){
  	this.elm.nativeElement.style.color = 'violet';
  	this.elm.nativeElement.style.backgroundColor = "black";
  }

}
/*static - whether or not to resolve query results before change detection runs (i.e. return static results only). If this option is not provided, the compiler will fall back to its default behavior, which is to use query results to determine the timing of query resolution. If any query results are inside a nested view (e.g. *ngIf), the query will be resolved after change detection runs. Otherwise, it will be resolved before change detection runs.

It may be a better idea to use static:true if the child does not depend on any conditions. If the visibility of element changes, then static:false may give better results.*/