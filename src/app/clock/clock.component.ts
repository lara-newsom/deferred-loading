import { Component, computed, inject } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { ClockService } from './clock.service';

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
  interval = toSignal(interval(1000));
  now = computed(() => {
    this.interval();
    const currentTime = new Date();
    const offset = this.clockService.selectedTimeZone().offset * 60 * 60000;

    return new Date(currentTime.getTime() + offset);
  });
  protected readonly clockService = inject(ClockService);
}
