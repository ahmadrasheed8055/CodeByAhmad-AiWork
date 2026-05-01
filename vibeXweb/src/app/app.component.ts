import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-features></app-features>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent {
  title = 'vibex-web';
}
