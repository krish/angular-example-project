import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailViewRoutingModule } from './detail-view-routing.module';
import { DetailViewComponent } from './detail-view.component';


@NgModule({
  declarations: [
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    DetailViewRoutingModule
  ]
})
export class DetailViewModule { }
