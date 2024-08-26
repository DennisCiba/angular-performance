import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { MousetrackerComponent } from './components/mousetracker/mousetracker.component';
import { ExpensiveComponent } from './components/expensive/expensive.component';
import { CdCounterComponent } from './components/cdcounter/cdcounter.component';
import { ControlComponent } from './components/control/control.component';
import { ApiComponent } from './components/api/api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    MousetrackerComponent,
    ExpensiveComponent,
    CdCounterComponent,
    ControlComponent,
    ApiComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  number = 5_000_000;
}
