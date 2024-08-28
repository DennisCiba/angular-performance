import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prime',
  standalone: true,
  templateUrl: './prime.component.html',
})
export class PrimeComponent {
  @Input({ required: true }) limit!: number;

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

      for (let j = 2 * i; j < sieve.length; j += i) {
        sieve[j] = false;
      }

      biggestPrime = i;
    }

    return biggestPrime;
  }
}
