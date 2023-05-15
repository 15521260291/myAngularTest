import {Directive, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appViewRef]'
})
export class ViewRefDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
    public el: ElementRef
  ) {
    console.log('66', this.el, this.viewContainerRef);

  }

}
