import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ClockComponent } from './clock/clock.component';
import { LegacyComponent } from './legacy/legacy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'legacy',
    component: LegacyComponent,
  }
];
