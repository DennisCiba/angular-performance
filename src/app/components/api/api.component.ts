import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  imports: [MatButtonModule],
})
export class ApiComponent implements OnInit, OnDestroy {
  public number = 0;

  private readonly randomService = inject(RandomService);
  private readonly unsubscribe = new Subject<void>();

  requestRandomNumber(): void {
    this.randomService.requestNewNumber();
  }

  ngOnInit(): void {
    this.randomService.number$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(value => {
        this.number = value;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
