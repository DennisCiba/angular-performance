import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../../services/random.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
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
  private starwarsStore = inject(starwarsStore)
  public number = signal(1); // manual
  public number$: Observable<number> = this.randomService.number$; // api response

  currentCharacter = this.starwarsStore.currentCharacter;
  loadCharacter = this.starwarsStore.loadCharacter;
  genderLabel = this.starwarsStore.genderLabel;

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


}
