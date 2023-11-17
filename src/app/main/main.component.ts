import { Component, ViewChild } from '@angular/core';
import { StepsDirective } from '../steps.directive';
import { DetailsDirective } from '../details.directive';
import { Step1Component } from '../step-1/step-1.component';
import { Detail1Component } from '../detail-1/detail-1.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @ViewChild(StepsDirective)
  appSteps!: StepsDirective;
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  public components = [
    Step1Component,
    Step1Component,
    Step1Component,
    Step1Component,
    Step1Component,
  ];
  public currentComponent = null;

  public detailComponents = [Detail1Component];
  public currentDetailComponent = null;

  constructor() {}

  public i = -1;
  public j = -1;

  public next(): void {
    if (
      this.i <= this.components.length &&
      this.j <= this.detailComponents.length
    ) {
      this.i += 1;
      this.j += 1;
      this.stepsComponent();
      this.detailComponent();

      console.log(this.i);
      console.log(this.j);
    } else {
    }
  }

  stepsComponent() {
    const currentComponent = this.components[this.i];

    let viewContainerRef = this.appSteps.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(currentComponent);
  }

  detailComponent() {
    const currentDetailComponent = this.detailComponents[this.j];

    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();

    viewDetailContainerRef.createComponent(currentDetailComponent);
  }
}
