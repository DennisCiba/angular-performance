import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../list.component';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgForOf, MatListModule, ItemComponent],
  templateUrl: './items.component.html',
})
export class ItemsComponent {
  @Input({ required: true }) items!: Character[];
}
