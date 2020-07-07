import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{
	
  constructor(private elref: ElementRef) { }

  ngAfterViewInit(){
  	this.elref.nativeElement.style.color = 'red';
  }

  changeColor(changedColor:string){
  	this.elref.nativeElement.style.color = changedColor;
  }
}
