import { Component, ComponentRef, ViewChild } from '@angular/core';
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
import { Detail } from '../detail';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  receivedData: any[] = [];
  message: any;
  messages: any;

  constructor() {}

  public i = 0;
  public isActive = this.i;
  currentDComponent: any = [];
  sub!: Subscription;
  public next(): void {
    if (this.i <= this.details.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i]
      );
    }
  }

  public back(): void {
    this.i -= 1;
    this.backDetailComponent(
      this.details[this.i].component,
      this.details[this.i]
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.detailComponent(this.details[this.i].component, this.details[this.i]);
  }

  details: Detail[] = [
    {
      name: 'Personal Details',
      isCompleted: false,
      isProgress: true,
      component: Detail1Component,
      data: [],
    },
    {
      name: 'Delivery Details',
      isCompleted: false,
      isProgress: true,
      component: Detail2Component,
      data: [],
    },
    {
      name: 'Payment Details',
      isCompleted: false,
      isProgress: true,
      component: Detail3Component,
      data: [],
    },
    // {
    //   name: 'Submitted',
    //   isCompleted: false,
    //   isProgress: true,
    //   component: ThankYouComponent,
    //   data: [],
    // },
  ];

  detailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    componentRef.instance.output.subscribe((results: any) => {
      this.details[this.i - 1].data = results;
      console.log(this.details);
    });
  }

  backDetailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    console.log(this.details[this.i].data);
  }

  receivedMessage($event: any) {
    this.message = $event;
    this.messages = this.message[0].name;
    console.log(this.message);
  }
}
