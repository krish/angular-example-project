import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorS500RoutingModule } from './error-s500-routing.module';
import { ErrorS500Component } from './error-s500.component';


@NgModule({
  declarations: [
    ErrorS500Component
  ],
  imports: [
    CommonModule,
    ErrorS500RoutingModule
  ]
})
export class ErrorS500Module { }
