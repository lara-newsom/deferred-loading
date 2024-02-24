import { Component } from '@angular/core';
import { LegacyModule } from '../legacy/legacy.component.module';
import { ClockComponent } from '../clock/clock.component';
import { ListComponent } from '../list/list.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LegacyModule,
    ClockComponent,
    ListComponent,
    MatTabsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showLegacy = false;
  showClock = false;
  showList = false;

}
