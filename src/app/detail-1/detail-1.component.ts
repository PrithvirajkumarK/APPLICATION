import { Component } from '@angular/core';
import { Step1 } from '../step1';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component {
  constructor(private service: DataService, private fb: FormBuilder) {}

  genders = ['Male', 'Female'];
  Details1 = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });
  ngOnInIt() {
    this.sendData();
  }
  detail1: Step1[] = [
    {
      name: 'Hello',
      isCompleted: false,
      isProgress: true,
      componant: [Detail1Component],
    },
  ];

  sendData() {
    this.service.shareData.next(this.detail1);
  }
}
