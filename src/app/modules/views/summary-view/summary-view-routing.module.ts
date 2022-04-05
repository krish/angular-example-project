import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryViewComponent } from './summary-view.component';

const routes: Routes = [{ path: '', component: SummaryViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryViewRoutingModule { }
