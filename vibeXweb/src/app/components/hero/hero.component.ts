import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="headline">
            We Build Websites<br>
            That <span class="gradient-text">Grow Businesses</span>
          </h1>
          <p class="subheadline">
            Modern. Fast. Secure.<br>
            Websites that make an impact.
          </p>
          <button class="cta-btn">
            Let's Build Yours
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div class="hero-graphic">
          <div class="dashboard-mockup">
            <div class="dashboard-header">
              <span>Analytics</span>
              <div class="header-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="dashboard-body">
              <div class="stat-card">
                <span class="stat-label">Visitors</span>
                <span class="stat-value">25.6K <span class="trend up">↑ 32.2%</span></span>
                <div class="mini-chart">
                   <svg viewBox="0 0 100 40" class="chart-svg">
                    <path d="M0 35 Q 20 10, 40 25 T 80 5 T 100 20" fill="none" stroke="#3b82f6" stroke-width="2" />
                   </svg>
                </div>
              </div>
              <div class="stat-card">
                <span class="stat-label">Conversions</span>
                <span class="stat-value">123 <span class="trend down">↓ 12.5%</span></span>
                <div class="mini-chart">
                   <svg viewBox="0 0 100 40" class="chart-svg">
                    <path d="M0 20 Q 20 30, 40 15 T 80 35 T 100 25" fill="none" stroke="#ef4444" stroke-width="2" />
                   </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding-top: 180px;
      padding-bottom: 100px;
      position: relative;
      overflow: hidden;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: 4rem;
    }
    .headline {
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.04em;
    }
    .gradient-text {
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subheadline {
      font-size: 1.5rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 3rem;
      font-weight: 400;
    }
    .cta-btn {
      background: var(--primary-blue);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: transform 0.2s, background 0.2s;
    }
    .cta-btn:hover {
      background: var(--secondary-blue);
      transform: translateY(-2px);
    }
    
    .hero-graphic {
      position: relative;
    }
    .dashboard-mockup {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 1.5rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .header-dots {
      display: flex;
      gap: 4px;
    }
    .header-dots span {
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
    .stat-card {
      background: rgba(255, 255, 255, 0.03);
      padding: 1.25rem;
      border-radius: 12px;
      margin-bottom: 1rem;
    }
    .stat-label {
      display: block;
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .trend {
      font-size: 0.85rem;
      font-weight: 500;
    }
    .trend.up { color: #10b981; }
    .trend.down { color: #ef4444; }
    .mini-chart {
      margin-top: 1rem;
      height: 40px;
    }
    .chart-svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 992px) {
      .container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .headline { font-size: 3.5rem; }
      .cta-btn { margin: 0 auto; }
      .dashboard-mockup { transform: none; margin-top: 4rem; }
    }
  `]
})
export class HeroComponent {}
