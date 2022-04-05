import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './views/notification-list/notification-list.component';
import { NotificationDetailComponent } from './views/notification-detail/notification-detail.component';



@NgModule({
  declarations: [
    NotificationListComponent,
    NotificationDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { }
