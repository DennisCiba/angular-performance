import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cdcounter',
  standalone: true,
  templateUrl: './cdcounter.component.html',
})
export class CdCounterComponent implements DoCheck {
  public changeCycles = 0;

  ngDoCheck(): void {
    this.changeCycles++;
  }
}
