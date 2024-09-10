import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CdCounterComponent } from '../cdcounter/cdcounter.component';
import { PrimeComponent } from '../prime/prime.component';
import { ListComponent } from '../list/list.component';
import { MousetrackerComponent } from '../mousetracker/mousetracker.component';
import { ApiComponent } from '../api/api.component';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    ListComponent,
    MousetrackerComponent,
    PrimeComponent,
    CdCounterComponent,
    ApiComponent,
    MatButton,
  ],
  templateUrl: './changedetection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangedetectionComponent {
  public limit = signal<number>(50000);

  public increaseLimit(): void {
    this.limit.update((limit) => ++limit)
  }
}
