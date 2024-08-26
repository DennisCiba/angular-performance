import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-expensive',
  standalone: true,
  templateUrl: './expensive.component.html',
})
export class ExpensiveComponent {
  @Input({ required: true, transform: numberAttribute }) public limit!: number;

  prime(): number {
    const sieve = new Array(this.limit);
    for (let i = 0; i < sieve.length; i++) {
      sieve[i] = true;
    }

    let biggestPrime = 2;
    for (let i = 2; i < sieve.length; i++) {
      if (!sieve[i]) {
        continue;
      }

      for (let j = 2*i; j < sieve.length; j+=i) {
        sieve[j] = false;
      }

      biggestPrime = i;
    }

    return biggestPrime;
  }
}
