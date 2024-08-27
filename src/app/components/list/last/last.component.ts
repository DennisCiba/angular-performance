import { Component, Input } from '@angular/core';
import { Character } from '../list.component';

@Component({
  selector: 'app-last-item',
  standalone: true,
  templateUrl: './last.component.html',
})
export class LastComponent {
  @Input({ required: true }) lastAdded!: Character;
}
