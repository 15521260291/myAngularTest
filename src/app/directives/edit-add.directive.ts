import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appEditAdd]'
})
export class EditAddDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
