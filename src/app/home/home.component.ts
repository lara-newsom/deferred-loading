import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { ListComponent } from '../list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from '../footer/footer.component';
import { LegacyComponent } from '../legacy/legacy.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ClockComponent,
    ListComponent,
    MatTabsModule,
    FooterComponent,
    LegacyComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  numberOfClicks = 0;

  addClick () {
    this.numberOfClicks++;
  }
}
