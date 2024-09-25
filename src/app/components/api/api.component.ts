import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../../services/random.service';
import { People, StarWarsService } from '../../services/starwars.service';
import { AsyncPipe } from '@angular/common';
import { Observable, pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { starwarsStore } from './api.store';

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  imports: [MatButtonModule, AsyncPipe],
  providers: [starwarsStore],
})
export class ApiComponent {
  private readonly randomService = inject(RandomService);
  private starwarsService = inject(StarWarsService);
  private readonly starWarsStore = inject(starwarsStore);
  public number = signal(1); // manual
  public number$: Observable<number> = this.randomService.number$; // api response

  public currentCharacter = signal<People>({
    name: '',
    gender: '',
    species: '',
  });

  constructor() {
    this.loadCharacter(this.number$);
    this.loadCharacter(this.number);
  }

  requestRandomNumber(): void {
    this.randomService.requestNewNumber();
  }

  increaseNumber(): void {
    this.number.update(n => n + 1);
  }

  loadCharacter = rxMethod<number>(
    pipe(
      tap((source) => console.log('source', source)),
      switchMap(id =>
        id === 0 || id > 80
          ? this.starwarsService.requestPeopleById('1')
          : this.starwarsService.requestPeopleById(id?.toString() ?? '1')
      ),
      tap(result => this.currentCharacter.set(result))
    )
  );
}
