import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Detail1Component } from './detail-1/detail-1.component';
import { MainComponent } from './main/main.component';
import { DetailsDirective } from './details.directive';
import { Step1Component } from './step-1/step-1.component';
import { ToolComponent } from './tool/tool.component';
import { StepsDirective } from './steps.directive';
import { Detail2Component } from './detail-2/detail-2.component';
import { Detail3Component } from './detail-3/detail-3.component';
import { Detail4Component } from './detail-4/detail-4.component';
import { Detail5Component } from './detail-5/detail-5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Detail1Component,
    MainComponent,
    DetailsDirective,
    Step1Component,
    ToolComponent,
    StepsDirective,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
