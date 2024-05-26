import { AppointmentListComponent } from '@appointment/list-feature-appointment/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from '@appointment/create-edit-feature-appointment/appointment-form/appointment-form.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    component: AppointmentListComponent,
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
];
