import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="clients">
      <div class="container">
        <p class="trusted-text">Trusted by forward-thinking businesses</p>
        <div class="logos-grid">
          <div class="logo-item" *ngFor="let i of [1,2,3,4,5]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="logo-icon">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="logo-text">Logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .clients {
      padding: 60px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .trusted-text {
      color: var(--text-muted);
      font-size: 0.9rem;
      text-align: left;
      margin-bottom: 2rem;
    }
    .logos-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      opacity: 0.6;
    }
    .logo-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .logo-icon {
      color: var(--text-main);
    }
    @media (max-width: 768px) {
      .logos-grid {
        justify-content: center;
      }
    }
  `]
})
export class ClientsComponent {}
