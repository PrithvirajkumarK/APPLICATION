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

@NgModule({
  declarations: [
    AppComponent,
    Detail1Component,
    MainComponent,
    DetailsDirective,
    Step1Component,
    ToolComponent,
    StepsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
