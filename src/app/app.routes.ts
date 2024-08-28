import { Routes } from '@angular/router';
import { ChangedetectionComponent } from './components/changedetection/changedetection.component';
import { BundleComponent } from './components/bundle/bundle.component';

export const routes: Routes = [
  { path: '', redirectTo: '/change-detection', pathMatch: 'full' },
  { path: 'change-detection', component: ChangedetectionComponent },
  {
    path: 'bundle',
    component: BundleComponent,
  },
];
