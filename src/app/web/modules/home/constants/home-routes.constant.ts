import { Routes } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { HomeComponent } from '../home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ],
  },
];
