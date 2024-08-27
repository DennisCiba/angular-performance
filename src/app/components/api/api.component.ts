import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiComponent implements OnDestroy {
  public response = 0;
  public isError = false;

  private readonly httpClient = inject(HttpClient);
  private readonly unsubscribe = new Subject<void>();

  requestRandomNumber(): void {
    this.httpClient
      .get<number>(
        'https://dtahecywprj7wm3gdp5alhk5g40zrxqv.lambda-url.eu-central-1.on.aws/'
      )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: value => {
          this.response = value;
        },
        error: () => {
          this.isError = true;
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
