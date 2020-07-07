import { Component, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostBinding('style.color')
  color: string = 'red';      

  @HostBinding('class.em-font') private incFont:boolean;  //adding class to component works but 															styles donot get applied

  title = 'host-listener-app';

  constructor(private el: ElementRef, private renderer: Renderer2){

  }

  @HostListener('click') onClick(){
  	alert("Div clicked");
  	this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');   
  	//only dynamic elements are styles by it
  	//renderer2 uses setStyle function whereas renderer uses setElementStyle
    
    const text = this.renderer.createText('Created using renderer');
    this.renderer.appendChild(this.el.nativeElement, text);
  }

  @HostListener('mouseover') onHover(){
  	//this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseout') onMouseout(){
  	//this.renderer.setElementStyle(this.el.nativeElement.querySelector('#hoveredEl'), 'color', 'black');
  }

  toggleSize(){
  	this.incFont = !this.incFont;
  }
}
