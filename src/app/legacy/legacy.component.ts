import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Observable, interval, map, startWith } from 'rxjs';

@Component({
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
  firstCool = _.first(this.thingsThatAreCool) as {thing: string; coolFactor: number};
  randomCool: Observable<{
    thing: string;
    coolFactor: number;
    index: number;
  }> = interval(3000).pipe(
    map(() => {
      const random = _.random(0, this.thingsThatAreCool.length - 1)
      return {
        ...this.thingsThatAreCool[random],
        index: random
      }
    }),
    startWith({
      ...this.firstCool,
      index: 0,
    })
  );
}
