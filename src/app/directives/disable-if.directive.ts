import { Directive, Input, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDisableIf]',
})
export class DisableIfDirective implements OnChanges {
  @Input() appDisableIf = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appDisableIf) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}
