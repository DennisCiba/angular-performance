import { Component, DoCheck, HostListener } from '@angular/core';

@Component({
  selector: 'app-mousetracker',
  standalone: true,
  templateUrl: './mousetracker.component.html',
})
export class MousetrackerComponent implements DoCheck {
  public scrolls = 0;
  public posX = 0;
  public posY = 0;
  public changeCycles = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrolls++;
  }

  onMouseMove(event: MouseEvent) {
    this.posX = event.pageX;
    this.posY = event.pageY;
  }

  ngDoCheck(): void {
    this.changeCycles++;
  }
}
