import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit {
  @Input() sizer: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,
      'font-size', this.sizer);
  }

}
