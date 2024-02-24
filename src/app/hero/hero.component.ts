import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  interval: Observable<number> = interval(3000).pipe(
    map((index) => index % 10 || 10),
    startWith(9)
  );
}
