import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/appointment/today',
    pathMatch: 'full',
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('@appointment/api-appointment').then((x) => x.routes),
  },
];
