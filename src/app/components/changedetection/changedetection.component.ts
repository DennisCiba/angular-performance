import { Component } from '@angular/core';
import { CdCounterComponent } from '../cdcounter/cdcounter.component';
import { ExpensiveComponent } from '../expensive/expensive.component';
import { ListComponent } from '../list/list.component';
import { MousetrackerComponent } from '../mousetracker/mousetracker.component';
import { ApiComponent } from '../api/api.component';

@Component({
  standalone: true,
  imports: [
    ListComponent,
    MousetrackerComponent,
    ExpensiveComponent,
    CdCounterComponent,
    ApiComponent,
  ],
  templateUrl: './changedetection.component.html',
})
export class ChangedetectionComponent {}
