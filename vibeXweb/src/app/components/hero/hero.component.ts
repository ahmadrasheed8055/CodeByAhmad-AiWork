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
            Innovative solutions for modern brands.<br>
            We don't just build sites; we build futures.
          </p>
          <div class="hero-btns">
            <button class="cta-btn primary">
              Let's Build Yours
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

        <div class="hero-graphic">
          <div class="monitor-wrapper">
            <!-- Professional 3D Monitor -->
            <div class="monitor-3d">
              <div class="screen-frame">
                <div class="screen-glass">
                  <!-- Complex Dashboard -->
                  <div class="dashboard-ui">
                    <aside class="side-panel">
                      <div class="logo-circle"></div>
                      <nav class="nav-mini">
                        <div class="nav-dot"></div>
                        <div class="nav-dot"></div>
                        <div class="nav-dot"></div>
                        <div class="nav-dot active"></div>
                      </nav>
                    </aside>
                    <main class="main-dash">
                      <header class="dash-nav">
                        <div class="search-bar"></div>
                        <div class="user-profile"></div>
                      </header>
                      <div class="dash-body">
                        <div class="card wide">
                          <div class="card-title">Real-time Performance</div>
                          <div class="chart-area">
                            <svg viewBox="0 0 300 100" class="main-chart-svg">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
                                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
                                </linearGradient>
                              </defs>
                              <path d="M0,80 Q30,40 60,70 T120,30 T180,60 T240,20 T300,50 L300,100 L0,100 Z" fill="url(#chartGrad)" />
                              <path d="M0,80 Q30,40 60,70 T120,30 T180,60 T240,20 T300,50" fill="none" stroke="#3b82f6" stroke-width="2" />
                            </svg>
                          </div>
                        </div>
                        <div class="card small">
                          <div class="label">Revenue</div>
                          <div class="value">$12,480</div>
                          <div class="trend positive">+18.2%</div>
                        </div>
                        <div class="card small">
                          <div class="label">Active Users</div>
                          <div class="value">4,529</div>
                          <div class="trend positive">+5.4%</div>
                        </div>
                        <div class="card medium">
                          <div class="card-title">Recent Activity</div>
                          <div class="activity-row"><span></span><span></span></div>
                          <div class="activity-row"><span></span><span></span></div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
              <div class="monitor-stand">
                <div class="stand-neck"></div>
                <div class="stand-base"></div>
              </div>
            </div>

            <!-- Floating 3D Elements -->
            <div class="floating-card stat-1">
              <div class="icon-pulse blue"></div>
              <span>Secure Hosting</span>
            </div>
            <div class="floating-card stat-2">
              <div class="icon-pulse green"></div>
              <span>99.9% Uptime</span>
            </div>
          </div>
          <div class="background-glow"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 160px 0 120px;
      position: relative;
      background: #0a0e14;
      overflow: visible;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      align-items: center;
      gap: 5rem;
    }
    .headline {
      font-size: clamp(3.5rem, 6vw, 5rem);
      font-weight: 900;
      line-height: 1.05;
      color: #fff;
      margin-bottom: 2rem;
      letter-spacing: -0.04em;
    }
    .gradient-text {
      background: linear-gradient(135deg, #3b82f6, #60a5fa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subheadline {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.6);
      margin-bottom: 3.5rem;
      max-width: 480px;
    }
    .cta-btn.primary {
      background: #3b82f6;
      color: #fff;
      padding: 1.1rem 2.2rem;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    }
    .cta-btn.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
    }

    /* Professional 3D Monitor */
    .hero-graphic {
      position: relative;
      perspective: 1500px;
    }
    .monitor-wrapper {
      transform: rotateY(-20deg) rotateX(5deg);
      transform-style: preserve-3d;
      animation: floatMonitor 6s infinite ease-in-out;
    }
    @keyframes floatMonitor {
      0%, 100% { transform: rotateY(-20deg) rotateX(5deg) translateY(0); }
      50% { transform: rotateY(-18deg) rotateX(4deg) translateY(-15px); }
    }

    .monitor-3d {
      position: relative;
      transform-style: preserve-3d;
    }
    .screen-frame {
      background: #1a1a1a;
      border: 12px solid #252525;
      border-radius: 24px;
      padding: 6px;
      box-shadow: 0 50px 100px -20px rgba(0,0,0,0.8),
                  inset 0 0 15px rgba(255,255,255,0.1);
      width: 540px;
      height: 340px;
      position: relative;
    }
    .screen-glass {
      width: 100%;
      height: 100%;
      background: #0d0f14;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    /* Dashboard UI */
    .dashboard-ui {
      display: flex;
      height: 100%;
      font-family: sans-serif;
    }
    .side-panel {
      width: 60px;
      background: #161922;
      border-right: 1px solid rgba(255,255,255,0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      gap: 25px;
    }
    .logo-circle { width: 30px; height: 30px; border-radius: 8px; background: #3b82f6; }
    .nav-mini { display: flex; flex-direction: column; gap: 15px; }
    .nav-dot { width: 16px; height: 16px; background: rgba(255,255,255,0.1); border-radius: 4px; }
    .nav-dot.active { background: #3b82f6; }

    .main-dash {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .dash-nav {
      height: 50px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .search-bar { width: 150px; height: 20px; background: rgba(255,255,255,0.03); border-radius: 10px; }
    .user-profile { width: 24px; height: 24px; background: rgba(255,255,255,0.2); border-radius: 50%; }

    .dash-body {
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 15px;
    }
    .card {
      background: #1c212c;
      border-radius: 12px;
      padding: 15px;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .card.wide { grid-column: span 2; height: 110px; }
    .card-title { font-size: 0.7rem; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-bottom: 10px; }
    .chart-area { width: 100%; height: 60px; }
    .main-chart-svg { width: 100%; height: 100%; }

    .card.small { height: 70px; display: flex; flex-direction: column; justify-content: center; }
    .label { font-size: 0.6rem; color: rgba(255,255,255,0.4); }
    .value { font-size: 1.1rem; font-weight: 800; color: #fff; }
    .trend { font-size: 0.55rem; font-weight: 700; margin-top: 4px; }
    .trend.positive { color: #10b981; }

    .card.medium { grid-column: span 2; height: 60px; display: flex; flex-direction: column; gap: 8px; }
    .activity-row { height: 6px; display: flex; gap: 10px; }
    .activity-row span:first-child { width: 20px; height: 100%; background: #3b82f6; border-radius: 3px; }
    .activity-row span:last-child { flex: 1; height: 100%; background: rgba(255,255,255,0.05); border-radius: 3px; }

    /* Stand */
    .stand-neck {
      width: 50px;
      height: 40px;
      background: #222;
      margin: -10px auto 0;
      transform: translateZ(-20px);
    }
    .stand-base {
      width: 180px;
      height: 12px;
      background: #2a2a2a;
      border-radius: 10px 10px 0 0;
      margin: 0 auto;
      transform: translateZ(-30px);
    }

    /* Floating Elements */
    .floating-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      padding: 12px 20px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 12px;
      color: #fff;
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 10;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    .stat-1 { top: 0; left: -20px; animation: floatUp 4s infinite ease-in-out; }
    .stat-2 { bottom: 40px; right: -40px; animation: floatUp 4s infinite ease-in-out 2s; }
    
    .icon-pulse {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .icon-pulse.blue { background: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
    .icon-pulse.green { background: #10b981; box-shadow: 0 0 10px #10b981; }

    @keyframes floatUp {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    .background-glow {
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(60px);
      z-index: -1;
    }

    @media (max-width: 1200px) {
      .screen-frame { width: 440px; height: 280px; }
    }
    @media (max-width: 992px) {
      .container { grid-template-columns: 1fr; text-align: center; }
      .subheadline { margin: 0 auto 3rem; }
      .hero-btns { display: flex; justify-content: center; }
      .screen-frame { margin: 0 auto; }
    }
  `]
})
export class HeroComponent {}
