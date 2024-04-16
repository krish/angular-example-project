import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: () =>
      import('./modules/views/detail-view/detail-view.module').then(
        (m) => m.DetailViewModule
      ),
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./modules/views/summary-view/summary-view.module').then(
        (m) => m.SummaryViewModule
      ),
  },
  {
    path: 'error500',
    loadChildren: () =>
      import('./core/modules/error-s500/error-s500.module').then(
        (m) => m.ErrorS500Module
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
