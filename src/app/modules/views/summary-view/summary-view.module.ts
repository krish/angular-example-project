import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryViewRoutingModule } from './summary-view-routing.module';
import { SummaryViewComponent } from './summary-view.component';


@NgModule({
  declarations: [
    SummaryViewComponent
  ],
  imports: [
    CommonModule,
    SummaryViewRoutingModule
  ]
})
export class SummaryViewModule { }
