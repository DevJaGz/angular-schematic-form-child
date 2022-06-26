import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/web/modules/home/home.component';
import { CoreComponent } from '../core.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../web/modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
