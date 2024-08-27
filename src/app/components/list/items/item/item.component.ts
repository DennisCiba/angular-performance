import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  @Input({ required: true }) item!: Character;

  ngOnInit(): void {
    console.count('ItemComponent init');
  }
}
