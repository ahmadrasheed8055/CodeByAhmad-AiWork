import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Custom Built</h3>
            <p>Tailored websites that reflect your brand and goals.</p>
          </div>

          <div class="feature-card">
            <div class="icon-box blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Fast & Secure</h3>
            <p>Optimized for speed, performance, and protection.</p>
          </div>

          <div class="feature-card">
            <div class="icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
            <h3>Built to Grow</h3>
            <p>Scalable solutions that grow with your business.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 100px 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
    .feature-card {
      padding: 1.5rem;
      transition: transform 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
    }
    .icon-box {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      color: var(--primary-blue);
    }
    .icon-box.blue {
      background: rgba(59, 130, 246, 0.1);
      color: var(--secondary-blue);
    }
    .feature-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    .feature-card p {
      color: var(--text-muted);
      line-height: 1.6;
      font-size: 1rem;
    }
    @media (max-width: 992px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 768px) {
      .features { padding: 60px 0; }
      .container { padding: 0 1.5rem; }
      .features-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }
      .icon-box {
        margin: 0 auto 1.5rem;
      }
    }
  `]
})
export class FeaturesComponent {}
