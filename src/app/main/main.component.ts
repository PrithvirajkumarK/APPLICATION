import { Component, ViewChild } from '@angular/core';
import { StepsDirective } from '../steps.directive';
import { DetailsDirective } from '../details.directive';
import { Step1Component } from '../step-1/step-1.component';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Detail4Component } from '../detail-4/detail-4.component';
import { Detail5Component } from '../detail-5/detail-5.component';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
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

  public detailComponents = [
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
  ];
  public currentDetailComponent = null;

  constructor(private service: DataService) {}

  public data1 = -1;
  public data2 = -1;
  sub!: Subscription;
  details: any = [];

  public next(): void {
    if (
      this.data1 <= this.components.length &&
      this.data2 <= this.detailComponents.length
    ) {
      this.data1 += 1;
      this.data2 += 1;
      this.stepsComponent();
      this.detailComponent();
      this.getDetails();

      console.log(this.data1);
      console.log(this.data2);
    } else {
    }
  }
  ngAfterViewInit() {
    this.next();
  }

  ngOnInIt() {
    this.getDetails();
  }

  stepsComponent() {
    const currentComponent = this.components[this.data1];

    let viewContainerRef = this.appSteps.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(currentComponent);
  }

  detailComponent() {
    const currentDetailComponent = this.detailComponents[this.data2];

    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();

    viewDetailContainerRef.createComponent(currentDetailComponent);
  }

  getDetails() {
    this.sub = this.service.shareData.subscribe((data) => {
      this.details = 'hi';
      console.log(this.details);
    });
  }
}
