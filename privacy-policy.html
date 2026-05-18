// Shared page components — exported to window for use by all detail pages
// Depends on: sections.jsx (Nav, Footer, LeadPill already on window)

(function () {
  const { useEffect } = React;

  // ── Reveal hook ──────────────────────────────────────────────────────────
  function usePageReveal() {
    useEffect(() => {
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach(el => io.observe(el));
      return () => io.disconnect();
    }, []);
  }

  // ── PageHero ─────────────────────────────────────────────────────────────
  function PageHero({ crumbs, eyebrow, h1, sub, stats }) {
    return (
      <section className="about-hero" aria-label="Page hero">
        <div className="about-hero-orb"></div>
        <div className="about-hero-orb-2"></div>
        <div className="container">
          <div className="about-hero-inner">
            <nav className="about-crumb" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span>→</span>}
                  {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
                </React.Fragment>
              ))}
            </nav>
            <div className="about-eyebrow reveal in">
              <span className="eyebrow"><span className="pulse"></span>{eyebrow}</span>
            </div>
            <h1 className="reveal in d1" dangerouslySetInnerHTML={{ __html: h1 }} />
            <p className="about-hero-sub reveal in d2">{sub}</p>
            {stats && (
              <div className="about-hero-stats reveal in d3">
                {stats.map((s, i) => (
                  <div className="ah-stat" key={i}>
                    <span className="ah-num serif" dangerouslySetInnerHTML={{ __html: s.num }} />
                    <span className="ah-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ── PageMetrics ───────────────────────────────────────────────────────────
  function PageMetrics({ items }) {
    return (
      <div className="page-metrics reveal in">
        {items.map((m, i) => (
          <div className="page-metric" key={i}>
            <div className="val" dangerouslySetInnerHTML={{ __html: m.val }} />
            <div className="lbl">{m.label}</div>
          </div>
        ))}
      </div>
    );
  }

  // ── PagePull (quote) ──────────────────────────────────────────────────────
  function PagePull({ quote, cite }) {
    return (
      <div className="page-pull reveal in">
        <blockquote dangerouslySetInnerHTML={{ __html: '\u201c' + quote + '\u201d' }} />
        <cite>{cite}</cite>
      </div>
    );
  }

  // ── PageFeature (service bullet) ─────────────────────────────────────────
  function PageFeature({ icon, title, desc }) {
    return (
      <div className="page-feature">
        <div className="pf-icon">{icon}</div>
        <div className="pf-text">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    );
  }

  // ── PageSidebar ───────────────────────────────────────────────────────────
  function PageSidebar({ heading, body, cta = 'Book a free audit' }) {
    return (
      <div className="page-sidebar">
        <div className="page-sidebar-card">
          <h4 dangerouslySetInnerHTML={{ __html: heading }} />
          <p>{body}</p>
          <a href="#contact" className="page-sidebar-btn">
            {cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <p className="page-sidebar-meta">Free · 20 min · No contract</p>
        </div>
      </div>
    );
  }

  // ── PageRelated ───────────────────────────────────────────────────────────
  function PageRelated({ heading = 'More case studies', items }) {
    return (
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="s-head" style={{ marginBottom: '40px' }}>
            <div>
              <span className="label">See more</span>
              <h2 className="reveal in" style={{ fontSize: 'clamp(32px,4vw,52px)', marginTop: '12px' }}>{heading}</h2>
            </div>
          </div>
          <div className="page-related reveal in">
            {items.map((it, i) => (
              <a href={it.href} className="page-related-card" key={i}>
                <div className="eyebrow-sm">{it.eyebrow}</div>
                <h4 dangerouslySetInnerHTML={{ __html: it.title }} />
                {it.stat === '→' ? (
                  <div className="stat-arrow">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </div>
                ) : (
                  <div className="stat-lg" dangerouslySetInnerHTML={{ __html: it.stat }} />
                )}
                <div className="meta-sm">{it.meta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── PageCTA ───────────────────────────────────────────────────────────────
  function PageCTA() {
    return (
      <section className="section cta-section" id="contact" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="cta-orb"></div>
        <div className="container">
          <div className="cta-grid">
            <div className="cta-copy">
              <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--sky-2)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <span className="pulse"></span>
                $1,000 in ad spend on us
              </span>
              <h2 className="reveal in">Ready to <em>ignite</em><br />your calendar?</h2>
              <p className="reveal in d1" style={{ color: 'var(--sky-2)', fontSize: '17px', maxWidth: '460px', marginTop: '20px', lineHeight: '1.55' }}>
                Book a 20-minute strategy call. We'll audit your funnel, cover your first $1K in ad spend, and our sales team handles all appointment booking from day one.
              </p>
              <div className="cta-meta reveal in d2">
                <span className="item">$1K ad spend covered</span>
                <span className="item">We book your appointments</span>
                <span className="item">No contracts</span>
              </div>
            </div>
            <div className="cta-form-wrap reveal in d1">
              <LeadForm variant="inline" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { PageHero, PageMetrics, PagePull, PageFeature, PageSidebar, PageRelated, PageCTA, usePageReveal });
})();
