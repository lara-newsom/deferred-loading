import { Component, signal } from '@angular/core';
import moment from 'moment';
import { interval } from 'rxjs/internal/observable/interval';
import { tap } from 'rxjs/internal/operators/tap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  now = signal(moment.now());
  interval = interval(1000);

  constructor() {
    interval(1000).pipe(
      tap(() => this.now.set(moment.now())),
      takeUntilDestroyed(),
    ).subscribe();
  }
}
