import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../../services/random.service';
import { People, StarWarsService } from '../../services/starwars.service';
import { AsyncPipe } from '@angular/common';
import { pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  imports: [MatButtonModule, AsyncPipe],
})
export class ApiComponent {
  private readonly randomService = inject(RandomService);
  private starwarsService = inject(StarWarsService);
  public number = signal(1); // manual
  public number$ = this.randomService.number$; // api response

  public currentCharacter = signal<People>({
    name: '',
    gender: '',
    species: '',
  });

  constructor() {}

  requestRandomNumber(): void {
    this.randomService.requestNewNumber();
  }

  increaseNumber(): void {
    this.number.update(n => n + 1);
  }

  toggleSource(): void {
  }

  loadCharacter = rxMethod<number | undefined>(
    pipe(
      switchMap(id =>
        id === 0
          ? this.starwarsService.requestPeopleById('1')
          : this.starwarsService.requestPeopleById(id?.toString() ?? '1')
      ),
      tap(result => this.currentCharacter.set(result))
    )
  );
}
