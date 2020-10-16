import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HovererDirective {
  @Input() hoverer;
  
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  onMouseEnter(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color', this.hoverer);
    this.renderer.setStyle(
       this.elementRef.nativeElement,
       'background-color', 'green');

  }

  onMouseLeave(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color', 'black');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color', 'white');        
  }
}


