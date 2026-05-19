/* About page extra styles */

/* Hero */
.about-hero {
  padding: 180px 0 100px;
  background: var(--cream);
  color: var(--ink);
  position: relative;
  overflow: hidden;
}
.about-hero-orb {
  position: absolute; width: 900px; height: 900px;
  right: -200px; top: -200px; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #DDE9F4 0%, #B0CCE3 30%, #6F9CC4 55%, #1B3457 80%, #061530 100%);
  opacity: 0.55; animation: float 14s ease-in-out infinite;
}
.about-hero-orb-2 {
  position: absolute; width: 400px; height: 400px;
  left: -100px; bottom: -100px; border-radius: 50%;
  background: radial-gradient(circle, var(--sky-2) 0%, transparent 70%);
  opacity: 0.45; animation: float 20s ease-in-out infinite reverse;
}
.about-hero-inner { position: relative; z-index: 2; max-width: 900px; }
.about-crumb {
  font-size: 12px; letter-spacing: 0.08em; color: var(--mute);
  display: flex; align-items: center; gap: 8px; margin-bottom: 24px;
}
.about-crumb a { color: var(--navy-2); text-decoration: none; }
.about-crumb a:hover { color: var(--ink); }
.about-eyebrow { margin-bottom: 24px; }
.about-hero h1 {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(40px, 9vw, 120px);
  line-height: 0.95; letter-spacing: -0.025em;
  margin: 0 0 24px; font-weight: 400;
  color: var(--ink);
  overflow-wrap: break-word;
}
.about-hero h1 em { font-style: italic; color: var(--navy-2); }
.about-hero-sub {
  font-size: 18px; line-height: 1.6; color: var(--mute);
  max-width: 560px; margin: 0 0 48px;
}
.about-hero-stats {
  display: flex; gap: 48px; flex-wrap: wrap;
  padding-top: 32px; border-top: 1px solid var(--line-strong);
}
.ah-stat { display: flex; flex-direction: column; gap: 6px; }
.ah-num {
  font-family: 'Instrument Serif', serif;
  font-size: 52px; line-height: 1; letter-spacing: -0.02em;
  color: var(--ink); display: flex; align-items: baseline; gap: 2px;
}
.ah-suf { font-size: 0.5em; color: var(--navy-2); }
.ah-lbl { font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--mute); }

/* Mission */
.about-mission { background: var(--paper); }
.about-mission-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: start; }
.about-mission-right p { font-size: 16px; color: var(--mute); line-height: 1.7; margin: 0 0 18px; }
.about-mission-right p strong { color: var(--ink); font-weight: 600; }
.about-mission-checks { display: flex; flex-direction: column; gap: 12px; margin-top: 28px; padding-top: 28px; border-top: 1px solid var(--line); }
.ach { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--ink); }
.ach-icon { width: 26px; height: 26px; border-radius: 50%; background: var(--navy-2); color: var(--paper); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

/* Story */
.about-story-section { background: var(--cream); }
.about-story-pull {
  text-align: center; max-width: 820px; margin: 0 auto 80px;
  padding: 0 20px;
}
.story-quote-mark {
  font-size: 120px; line-height: 0.5; color: var(--sky-3);
  display: block; margin-bottom: 24px;
}
.about-story-pull blockquote {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(28px, 4vw, 48px); line-height: 1.15; letter-spacing: -0.015em;
  margin: 0 0 24px; color: var(--ink);
}
.about-story-pull blockquote em { font-style: italic; color: var(--navy-2); }
.story-attr { font-size: 13px; color: var(--mute); letter-spacing: 0.06em; }
.about-story-grid { display: grid; grid-template-columns: 180px 1fr; gap: 64px; align-items: start; }
.story-year { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.sy-num { font-size: 72px; line-height: 1; letter-spacing: -0.02em; color: var(--sky-3); }
.sy-line { width: 1px; flex: 1; min-height: 200px; background: linear-gradient(to bottom, var(--sky-3), transparent); }
.story-body h2 {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(36px, 5vw, 64px); line-height: 0.95; letter-spacing: -0.02em;
  margin: 0 0 24px; font-weight: 400;
}
.story-body h2 em { font-style: italic; color: var(--navy-2); }
.story-body p { font-size: 16px; color: var(--mute); line-height: 1.7; margin: 0 0 18px; }

/* Differentiators */
.about-diff-section { background: var(--paper); }
.about-diff-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.about-diff-card {
  background: var(--cream); border: 1px solid var(--line); border-radius: 24px;
  padding: 40px; transition: transform 0.4s, box-shadow 0.4s;
}
.about-diff-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.adc-num { font-size: 48px; color: var(--sky-3); line-height: 1; margin-bottom: 20px; }
.about-diff-card h3 {
  font-family: 'Instrument Serif', serif;
  font-size: 28px; letter-spacing: -0.01em; font-weight: 400;
  margin: 0 0 12px;
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
}
.adc-badge {
  font-family: 'Geist', sans-serif;
  font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 999px;
  background: rgba(91,227,106,0.12); border: 1px solid rgba(91,227,106,0.3);
  color: #3AB84E; font-weight: 500;
}
.about-diff-card p { font-size: 15px; color: var(--mute); line-height: 1.6; margin: 0; }

/* Team */
.about-team-section { background: var(--cream); }
.about-team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.about-team-card {
  background: var(--paper); border: 1px solid var(--line); border-radius: 20px;
  padding: 28px 24px; text-align: center;
  transition: transform 0.4s, box-shadow 0.4s;
}
.about-team-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.atc-avatar {
  width: 72px; height: 72px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; color: var(--paper); font-weight: 600; letter-spacing: 0.04em;
  margin: 0 auto 16px;
}
.atc-name {
  font-family: 'Instrument Serif', serif;
  font-size: 22px; letter-spacing: -0.01em; font-weight: 400; margin: 0 0 4px;
}
.atc-role { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--navy-2); margin-bottom: 12px; }
.atc-note { font-size: 13px; color: var(--mute); line-height: 1.55; margin: 0; }

/* Cofounders: 2 wider cards centered */
.founders-grid {
  grid-template-columns: repeat(2, 1fr) !important;
  max-width: 880px;
  margin: 0 auto;
  gap: 28px;
}
.founder-card { padding: 40px 32px; }
.founder-avatar {
  width: 96px !important;
  height: 96px !important;
  font-size: 24px;
}
.founder-card .atc-name { font-size: 28px; margin-bottom: 6px; }
.founder-card .atc-note { font-size: 14px; max-width: 36ch; margin: 0 auto; }

.founder-photo {
  width: 120px; height: 120px; border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 1px solid var(--line);
  box-shadow: 0 18px 40px -22px rgba(8, 21, 44, 0.4);
  background: var(--cream);
}
.founder-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

/* Values */
.about-values-section { background: var(--paper); }
.about-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; }
.about-val { background: var(--paper); padding: 36px 28px; transition: background 0.3s; }
.about-val:hover { background: var(--white); }
.av-num { font-size: 48px; color: var(--sky-3); line-height: 1; margin-bottom: 16px; }
.about-val h3 { font-family: 'Instrument Serif', serif; font-size: 24px; letter-spacing: -0.01em; font-weight: 400; margin: 0 0 10px; }
.about-val p { font-size: 14px; color: var(--mute); line-height: 1.6; margin: 0; }

/* Reviews bar */
.about-reviews-bar { background: var(--navy-2); padding: 48px 0; }
.arb-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
}
.arb-left { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.arb-stars { display: flex; gap: 3px; color: #E8A53D; font-size: 18px; }
.arb-num {
  font-family: 'Instrument Serif', serif; font-size: 56px; line-height: 1;
  letter-spacing: -0.02em; color: var(--paper);
}
.arb-meta { font-size: 14px; color: var(--sky-2); max-width: 280px; line-height: 1.4; }
.arb-cta {
  background: var(--paper); color: var(--navy-2);
  padding: 14px 24px; border-radius: 999px;
  font-size: 14px; font-weight: 500;
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none; transition: transform 0.3s, background 0.3s;
  flex-shrink: 0;
}
.arb-cta:hover { transform: translateY(-2px); background: var(--sky-1); }
.arb-cta svg { transition: transform 0.3s; }
.arb-cta:hover svg { transform: translateX(3px); }

/* Responsive */
@media (max-width: 960px) {
  .about-hero { padding: 120px 0 80px; }
  .about-mission-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-story-grid { grid-template-columns: 1fr; gap: 32px; }
  .about-diff-grid { grid-template-columns: 1fr; }
  .about-team-grid { grid-template-columns: 1fr 1fr; }
  .about-values-grid { grid-template-columns: 1fr 1fr; }
  .about-diff-card { padding: 32px; }
}

@media (max-width: 768px) {
  .about-hero { padding: 100px 0 64px; }
  .about-hero-orb { width: 600px; height: 600px; right: -160px; top: -120px; }
  .about-hero-stats { gap: 28px; }
  .ah-num { font-size: 44px; }

  /* Founders: single column on mobile */
  .founders-grid {
    grid-template-columns: 1fr !important;
    max-width: 460px;
  }

  /* Reviews bar: stack vertically */
  .about-reviews-bar { padding: 40px 0; }
  .arb-inner { flex-direction: column; gap: 24px; align-items: flex-start; }
  .arb-left { gap: 14px; }
  .rating-large { align-items: flex-start; }

  /* Story: reduce large quote size */
  .story-quote-mark { font-size: 96px; }

  /* Values: reduce padding */
  .about-val { padding: 28px 22px; }
  .about-diff-card { padding: 28px; }
}

@media (max-width: 600px) {
  .about-team-grid { grid-template-columns: 1fr; }
  .about-values-grid { grid-template-columns: 1fr; }
  .about-hero-stats { gap: 20px; }
  .about-diff-grid { grid-template-columns: 1fr; }
  /* s-head: stack label+headline above right-col text */
  .s-head { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 36px; }
  .s-head .right { max-width: 100%; font-size: 15px; }
}

@media (max-width: 480px) {
  .about-hero { padding: 90px 0 56px; }
  .about-hero-orb { width: 420px; height: 420px; right: -120px; top: -80px; }
  .about-hero-orb-2 { display: none; }

  /* Further reduce hero heading on very small screens */
  .about-hero h1 { font-size: clamp(34px, 9.5vw, 48px); line-height: 1; }

  /* Stack hero stats vertically */
  .about-hero-stats { flex-direction: column; gap: 16px; padding-top: 24px; }
  .ah-num { font-size: 40px; }
  .about-hero-sub { font-size: 16px; margin-bottom: 36px; }

  /* Story */
  .story-quote-mark { font-size: 72px; margin-bottom: 12px; }
  .about-story-pull { margin-bottom: 40px; padding: 0; }
  .story-year { flex-direction: row; align-items: center; gap: 16px; }
  .sy-line { display: none; }
  .sy-num { font-size: 48px; }

  /* Diff cards */
  .about-diff-card { padding: 24px 20px; }
  .adc-num { font-size: 36px; }
  .about-diff-card h3 { font-size: 24px; }

  /* Founder cards */
  .founder-card { padding: 28px 20px; }
  .founder-card .atc-name { font-size: 24px; }
  .founder-photo { width: 96px; height: 96px; }

  /* Values */
  .about-val { padding: 24px 18px; }
  .av-num { font-size: 36px; }

  /* Reviews bar */
  .arb-num { font-size: 40px; }
  .arb-cta { width: 100%; justify-content: center; min-height: 48px; }

  /* Mission checks */
  .about-mission-checks { gap: 10px; }
}

@media (max-width: 360px) {
  .about-hero h1 { font-size: 32px; }
  .ah-num { font-size: 36px; }
}
