import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiComponent implements OnInit, OnDestroy {
  public response = 0;
  public valuesReceived = 0;

  private readonly randomService = inject(RandomService);
  private readonly unsubscribe = new Subject<void>();

  requestRandomNumber(): void {
    this.randomService.requestNewNumber();
  }

  ngOnInit(): void {
    this.randomService.number$.subscribe(value => {
      this.response = value;
      this.valuesReceived++;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
