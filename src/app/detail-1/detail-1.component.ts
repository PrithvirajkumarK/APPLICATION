import { Component, Input } from '@angular/core';
import { Step1 } from '../step1';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BtnDetails } from '../btn-details';
import { MainComponent } from '../main/main.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component {
  @Input('data')
  data!: any;
  @Input('receivedData')
  receivedData!: any;

  constructor(private maincomp: MainComponent, private fb: FormBuilder) {}

  private output = new Subject<any>();

  btnDetail1: BtnDetails[] = [
    {
      name: 'D1',
      key: 'nxt',
      data: [],
    },
  ];
  genders = ['Male', 'Female'];
  Details1 = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
  });

  get name() {
    return this.Details1?.get('name');
  }
  get age() {
    return this.Details1?.get('age');
  }
  get gender() {
    return this.Details1?.get('gender');
  }
  get email() {
    return this.Details1?.get('email');
  }

  ngOnInIt() {}
  next() {
    this.btnDetail1[0].data = this.Details1.value;
    if (this.Details1.valid) {
      this.maincomp.next();
      this.output.next(this.btnDetail1[0].data);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.receivedData);
    } else {
      alert('please fill all the details');
    }
  }
}
