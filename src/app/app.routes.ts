import { Routes } from '@angular/router';
import { ChangedetectionComponent } from './components/changedetection/changedetection.component';

export const routes: Routes = [
  { path: '', redirectTo: '/change-detection', pathMatch: 'full' },
  { path: 'change-detection', component: ChangedetectionComponent },
  {
    path: 'bundle',
    loadComponent: () =>
      import('./components/bundle/bundle.component').then(
        m => m.BundleComponent
      ),
  },
];
