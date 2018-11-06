import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appSurvol]'
})
export class SurvolDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
