import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appViewAdd]'
})
export class ViewAddDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
