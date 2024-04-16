import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorS500Component } from './error-s500.component';

const routes: Routes = [{ path: '', component: ErrorS500Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorS500RoutingModule { }
