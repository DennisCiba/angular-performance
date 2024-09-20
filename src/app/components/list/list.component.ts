import { NgForOf } from '@angular/common';
import { Component, computed, effect, Injector, signal } from '@angular/core';
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
  loggingEffect(): void {
    effect(
      () => {
        console.log(`The count is: ${this.items().length}`);
        localStorage.setItem('list', JSON.stringify(this.items()));
      },
      { injector: this.injector }
    );
  }

  constructor(private injector: Injector) {
    this.loggingEffect();
  }

  items = signal<Character[]>(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')!) ?? [] : generateList());
  lastAdded = computed(() => this.items()[this.items().length - 1]);

  add() {
    const newCharacter = {
      id: this.items().length + 1,
      name: randString(),
      gender: ['m', 'f', '?'][Math.floor(Math.random() * 3)],
      race: ['Hobbit', 'Man', 'Elf', 'Orc', 'Maia', 'Valar'][
        Math.floor(Math.random() * 6)
      ],
    };
    this.items.update(items => [...items, newCharacter]);
  }
}
