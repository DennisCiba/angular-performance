import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { MousetrackerComponent } from './components/mousetracker/mousetracker.component';
import { ExpensiveComponent } from './components/expensive/expensive.component';
import { CdCounterComponent } from './components/cdcounter/cdcounter.component';
import { ApiComponent } from './components/api/api.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    MousetrackerComponent,
    ExpensiveComponent,
    CdCounterComponent,
    ApiComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
