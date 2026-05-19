/* ====== LEGAL PAGE STYLES ====== */
.legal-nav {
  position: sticky; top: 0; z-index: 50;
  padding: 18px 0;
  background: rgba(245, 242, 234, 0.92);
  backdrop-filter: saturate(1.4) blur(18px);
  -webkit-backdrop-filter: saturate(1.4) blur(18px);
  border-bottom: 1px solid var(--line);
}
.legal-nav .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
.legal-nav .logo { display: flex; align-items: center; gap: 10px; font-size: 20px; letter-spacing: -0.02em; font-family: 'Geist', sans-serif; color: var(--ink); text-decoration: none; }
.legal-nav .logo-mark {
  width: 28px; height: 28px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #FFE3B5 0%, #FF8A4C 35%, #C13D2A 70%, #061530 100%);
  box-shadow: 0 0 0 1px rgba(8,21,44,0.08), 0 6px 20px -6px rgba(193, 61, 42, 0.6);
  flex-shrink: 0;
}
.legal-nav .nav-links { display: flex; gap: 28px; font-size: 14px; color: var(--mute); }
.legal-nav .nav-links a { transition: color 0.2s; color: var(--mute); text-decoration: none; }
.legal-nav .nav-links a:hover { color: var(--ink); }
.legal-nav .nav-cta {
  background: var(--navy-2); color: var(--paper);
  padding: 10px 20px; border-radius: 999px; font-size: 14px;
  display: inline-flex; align-items: center; gap: 8px;
  transition: transform 0.3s, background 0.3s; text-decoration: none;
}
.legal-nav .nav-cta:hover { transform: translateY(-1px); background: var(--navy-3); }
.legal-nav .nav-cta .dot { width: 6px; height: 6px; border-radius: 50%; background: #5BE36A; box-shadow: 0 0 8px #5BE36A; }

/* Hero band for legal pages */
.legal-hero {
  padding: 100px 0 72px;
  background: var(--navy-3);
  color: var(--paper);
  position: relative;
  overflow: hidden;
}
.legal-hero::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(700px 400px at 90% 50%, rgba(157,192,222,0.15), transparent 70%);
}
.legal-hero-inner { position: relative; z-index: 2; }
.legal-crumb { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sky-2); margin-bottom: 16px; }
.legal-crumb a { color: var(--sky-3); text-decoration: none; }
.legal-crumb a:hover { color: var(--paper); }
.legal-hero h1 {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(40px, 7vw, 80px);
  line-height: 0.95; letter-spacing: -0.02em;
  margin: 0 0 16px; font-weight: 400;
  color: var(--paper);
}
.legal-hero h1 em { font-style: italic; color: var(--sky-3); }
.legal-hero .meta { font-size: 14px; color: var(--sky-2); }

/* Content area */
.legal-content { padding: 80px 0 120px; }
.legal-layout { display: grid; grid-template-columns: 240px 1fr; gap: 80px; align-items: start; }

/* TOC sidebar */
.legal-toc {
  position: sticky; top: 88px;
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 18px; padding: 24px;
}
.legal-toc h4 {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--mute); margin: 0 0 14px; font-weight: 500;
}
.legal-toc ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px; }
.legal-toc ul a {
  font-size: 13px; color: var(--mute);
  text-decoration: none; display: block;
  padding: 6px 10px; border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  line-height: 1.4;
}
.legal-toc ul a:hover { background: rgba(8,21,44,0.05); color: var(--ink); }

/* Body content */
.legal-body { max-width: 780px; }
.legal-body h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 32px; letter-spacing: -0.01em; font-weight: 400;
  margin: 64px 0 16px; padding-top: 16px;
  color: var(--ink);
  border-top: 1px solid var(--line);
}
.legal-body h2:first-child { margin-top: 0; border-top: none; }
.legal-body h3 {
  font-size: 17px; font-weight: 600; margin: 32px 0 10px;
  color: var(--ink); letter-spacing: -0.01em;
}
.legal-body p { font-size: 15px; color: #3A4A62; line-height: 1.7; margin: 0 0 16px; }
.legal-body ul, .legal-body ol {
  padding-left: 20px; margin: 0 0 16px;
}
.legal-body li { font-size: 15px; color: #3A4A62; line-height: 1.7; margin-bottom: 6px; }
.legal-body strong { color: var(--ink); font-weight: 600; }
.legal-body a { color: var(--navy-2); text-decoration: underline; text-underline-offset: 3px; }
.legal-body a:hover { color: var(--navy-3); }
.legal-callout {
  background: var(--sky-1); border: 1px solid var(--sky-2);
  border-radius: 14px; padding: 20px 24px; margin: 24px 0;
}
.legal-callout p { margin: 0; color: var(--navy-2); font-size: 14px; }

/* Legal footer */
.legal-footer-bar { background: var(--navy-3); color: var(--sky-2); padding: 60px 0 40px; border-top: 1px solid rgba(255,255,255,0.08); }
.legal-footer-bar .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 48px; }
.legal-footer-bar .logo { display: flex; align-items: center; gap: 10px; font-size: 20px; letter-spacing: -0.02em; font-family: 'Geist', sans-serif; color: var(--paper); margin-bottom: 12px; }
.legal-footer-bar .blurb { font-size: 14px; color: var(--sky-2); max-width: 280px; line-height: 1.55; }
.legal-footer-bar h4 { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--paper); margin: 0 0 16px; font-weight: 500; }
.legal-footer-bar ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.legal-footer-bar ul a { font-size: 14px; color: var(--sky-2); text-decoration: none; transition: color 0.2s; }
.legal-footer-bar ul a:hover { color: var(--paper); }
.legal-footer-bar .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: rgba(255,255,255,0.5); flex-wrap: wrap; gap: 12px; }

@media (max-width: 960px) {
  .legal-layout { grid-template-columns: 1fr; gap: 40px; }
  .legal-toc { position: static; }
  .legal-footer-bar .footer-grid { grid-template-columns: 1fr 1fr; }
  .legal-nav .nav-links { display: none; }
}
@media (max-width: 600px) {
  .legal-footer-bar .footer-grid { grid-template-columns: 1fr; }
  .legal-footer-bar .footer-bottom { flex-direction: column; align-items: flex-start; }
}
