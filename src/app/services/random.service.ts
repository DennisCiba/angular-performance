import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private readonly _number$ = new BehaviorSubject(0);
  public readonly number$ = this._number$.asObservable();

  private readonly httpClient = inject(HttpClient);

  requestNewNumber(): void {
    this.httpClient
      .get<number>(
        'https://dtahecywprj7wm3gdp5alhk5g40zrxqv.lambda-url.eu-central-1.on.aws/'
      )
      .pipe(take(1))
      .subscribe({
        next: value => {
          this._number$.next(value);
        },
      });
  }
}
