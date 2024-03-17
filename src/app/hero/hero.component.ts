import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ AsyncPipe, NgOptimizedImage,],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  intervalSignal = toSignal(interval(3000), {initialValue: 0});
}
