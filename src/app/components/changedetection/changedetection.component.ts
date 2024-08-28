import { Component } from '@angular/core';
import { CdCounterComponent } from '../cdcounter/cdcounter.component';
import { PrimeComponent } from '../prime/prime.component';
import { ListComponent } from '../list/list.component';
import { MousetrackerComponent } from '../mousetracker/mousetracker.component';
import { ApiComponent } from '../api/api.component';

@Component({
  standalone: true,
  imports: [
    ListComponent,
    MousetrackerComponent,
    PrimeComponent,
    CdCounterComponent,
    ApiComponent,
  ],
  templateUrl: './changedetection.component.html',
})
export class ChangedetectionComponent {}
