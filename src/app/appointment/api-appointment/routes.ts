import { AppointmentListComponent } from '@appointment/today-list-feature-appointment/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from '@appointment/create-edit-feature-appointment/appointment-form/appointment-form.component';

import { Routes } from '@angular/router';
import { AppointmentTableComponent } from '@appointment/all-list-feature-appointment/appointment-table/appointment-table.component';
import { AppointmentDetailsComponent } from '@appointment/details-feature-appointment/appointment-details/appointment-details.component';

export const routes: Routes = [
  {
    component: AppointmentTableComponent,
    path: 'all',
  },
  {
    component: AppointmentListComponent,
    path: 'today',
  },
  {
    component: AppointmentFormComponent,
    path: 'add',
  },
  {
    component: AppointmentFormComponent,
    path: 'edit/:id',
  },
  {
    component: AppointmentDetailsComponent,
    path: ':id',
  },
];
