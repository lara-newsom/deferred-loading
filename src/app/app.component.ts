import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LegacyModule } from './legacy/legacy.component.module';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LegacyModule,
    HeaderComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meowmerican Wanderlust';
}
