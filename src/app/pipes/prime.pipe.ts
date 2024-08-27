import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prime',
  standalone: true,
})
export class PrimePipe implements PipeTransform {
  transform(value: number): number {
    const sieve = new Array(value);
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

    console.count('Prime Recomputes');
    return biggestPrime;
  }
}
