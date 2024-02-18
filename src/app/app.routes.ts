import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ClockComponent } from './clock/clock.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  }
];
