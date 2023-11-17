import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSteps]',
})
export class StepsDirective {
  [x: string]: any;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
