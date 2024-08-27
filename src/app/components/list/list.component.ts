import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { randString } from '../../utils/utils';
import { MatButtonModule } from '@angular/material/button';
import { generateList } from './list';
import { ItemsComponent } from './items/items.component';
import { LastComponent } from './last/last.component';

export interface Character {
  id: number;
  name: string;
  gender: string;
  race: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [
    MatListModule,
    NgForOf,
    MatButtonModule,
    ItemsComponent,
    LastComponent,
  ],
})
export class ListComponent {
  items = generateList();
  lastAdded: Character = { ...this.items[0] };

  add() {
    const newCharacter = {
      id: this.items.length + 1,
      name: randString(),
      gender: ['m', 'f', '?'][Math.floor(Math.random() * 3)],
      race: ['Hobbit', 'Man', 'Elf', 'Orc', 'Maia', 'Valar'][
        Math.floor(Math.random() * 6)
      ],
    };
    this.items.unshift(newCharacter);

    this.lastAdded.id = newCharacter.id;
    this.lastAdded.race = newCharacter.race;
    this.lastAdded.name = newCharacter.name;
    this.lastAdded.gender = newCharacter.gender;
  }
}
