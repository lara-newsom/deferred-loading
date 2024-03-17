import { Component } from '@angular/core';
import { LegacyModule } from '../legacy/legacy.module';
import { ClockComponent } from '../clock/clock.component';
import { ListComponent } from '../list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LegacyModule,
    ClockComponent,
    ListComponent,
    MatTabsModule,
    FooterComponent
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
