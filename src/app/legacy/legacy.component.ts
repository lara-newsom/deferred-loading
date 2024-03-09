import { Component, inject } from '@angular/core';
import * as _ from 'lodash'; // TODO: STOP USING LODASH
import { interval, map, startWith, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { LegacyService } from './legacy.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass, AsyncPipe],
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrl: './legacy.component.scss'
})
export class LegacyComponent {
  thingsThatAreCool = [
    {thing: 'CATS!', coolFactor: 10},
    {thing: 'Bon Jovi', coolFactor: 6},
    {thing: 'Tony Hawk', coolFactor: 10},
    {thing: 'Boomboxes', coolFactor: 8},
    {thing: 'Funny Buttons', coolFactor: 8},
    {thing: 'Cell Phones', coolFactor: 5},
    {thing: 'Hypercolor', coolFactor: 6},
    {thing: 'Pogoballs', coolFactor: 7},
    {thing: 'Roller Rinks', coolFactor: 9},
    {thing: 'Salt-N-Peppa', coolFactor: 10},
    {thing: 'Tracksuits', coolFactor: 6},
    {thing: 'Unicorns', coolFactor: 9},
  ];
  randomCool = toSignal(interval(3000).pipe(
    map(() => {
      const random = _.random(0, this.thingsThatAreCool.length - 1);
      const previous = random - 1 >= 0 ? random -1 : this.thingsThatAreCool.length - 1;
      const next = random + 1 <= this.thingsThatAreCool.length - 1 ?  random + 1 : 0;
      return [
        {
          ...this.thingsThatAreCool[random],
          index: random
        },
        {
          ...this.thingsThatAreCool[previous],
          index: previous
        },
        {
          ...this.thingsThatAreCool[next],
          index: next
        }
    ]
    }),
    startWith(
      [
        {
          ...this.thingsThatAreCool[0],
          index: 0,
        },
        {
          ...this.thingsThatAreCool[1],
          index: 1,
        },
        {
          ...this.thingsThatAreCool[2],
          index: 2,
        },

      ])
  ));
  private readonly legacyService = inject(LegacyService);
  coolStuffCarousel$ = this.legacyService.coolStuff$.pipe(
    switchMap((coolStuff) => {
      let index = 0;
      return interval(4000).pipe(
      map(() => {
        index = _.random(0, coolStuff.length - 1);
        return coolStuff[index]
      }),
      startWith(coolStuff[0])
    )}
    )
  )
}
