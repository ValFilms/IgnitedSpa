// Ignited Spa — Sections
const { useState, useEffect, useRef } = React;

// ============== ICONS ==============
const Icon = {
  arrow: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  star: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.9 7h7.1l-5.7 4.4 2.2 7.1L12 16.3 5.5 20.5l2.2-7.1L2 9h7.1z"/></svg>,
  google: (p) => <svg width="14" height="14" viewBox="0 0 24 24" {...p}><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93l3.66-2.83z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A10.99 10.99 0 0 0 2.18 7.07l3.66 2.83C6.71 7.3 9.14 5.38 12 5.38z"/></svg>,
  meta: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3.2-.4 4.6-1.1l-2-3.6c-.7.4-1.6.6-2.6.6-2.5 0-4.6-2-4.6-4.5 0-1.3.5-2.4 1.3-3.2.8-.8 2-1.3 3.3-1.3.6 0 1.2.1 1.7.4l1.2-3.4C13.9 2 13 2 12 2z"/></svg>,
  spark: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l3 3m8 8l3 3M5 19l3-3m8-8l3-3"/></svg>,
  bolt: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>,
  target: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>,
  chart: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 3v18h18M7 14l4-4 4 4 5-6"/></svg>,
};

// ============== REVEAL HOOK ==============
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ============== COUNTER ==============
function useCountUp(target, { duration = 2000, decimals = 0, start = false } = {}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, t0;
    const tick = (t) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return decimals ? val.toFixed(decimals) : Math.floor(val);
}

// ============== NAV ==============
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark"></span>
          <span>Ignited<span className="serif-i" style={{marginLeft:'4px', color:'var(--navy-2)'}}>Spa</span></span>
        </a>
        <div className="nav-links">
          <a href="#offer">The offer</a>
          <a href="#work">Case studies</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
          <a href="about.html">About</a>
        </div>
        <a href="#contact" className="nav-cta">
          <span className="dot"></span>
          Book a strategy call
        </a>
      </div>
    </nav>
  );
}

// ============== HERO ==============
function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb"></div>
      <div className="hero-orb-2"></div>
      <div className="container hero-inner">
        <div className="reveal in">
          <span className="eyebrow">
            <span className="pulse"></span>
            We cover the first $1,000 in ad spend
          </span>
        </div>
        <h1 className="reveal in d1">
          We turn quiet<br/>
          medspas into <em>fully<br/>booked</em> ones.
        </h1>
        <p className="hero-sub reveal in d2">
          Ignited Spa runs the ads, builds the funnel, <strong style={{color:'var(--ink)',fontWeight:500}}>and our sales team books the appointments for you.</strong> No chasing leads. No cold calls. Just patients on your calendar.
        </p>
        <div className="hero-actions reveal in d3">
          <a href="#contact" className="btn-primary">
            Book a free audit <span className="arrow"><Icon.arrow /></span>
          </a>
          <a href="#work" className="btn-ghost">
            See our work <Icon.arrow />
          </a>
        </div>
        <div className="hero-meta reveal in d4">
          <div className="stars">
            {[...Array(5)].map((_, i) => <Icon.star key={i} />)}
          </div>
          <div className="hero-meta-text">
            <strong>4.9/5</strong> from 20+ medspa owners
          </div>
          <div className="hero-meta-text" style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <Icon.google /> Google verified partner
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        Scroll
        <div className="line"></div>
      </div>
    </section>
  );
}

// ============== MARQUEE ==============
function Marquee() {
  const items = [
    'Botox & filler', 'Laser hair removal', 'CoolSculpting', 'Microneedling',
    'Hydrafacial', 'PRP & hair', 'Weight loss / GLP-1', 'IV therapy',
    'Skin tightening', 'Lash & brow'
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <div className="item" key={i}>
            <span className="serif-i">{t}</span>
            <span className="dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============== STATS ==============
function Stats() {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const spend = useCountUp(124, { start });
  const clients = useCountUp(38, { start });
  const reviews = useCountUp(23, { start });

  return (
    <section className="section stats" ref={ref}>
      <div className="container">
        <div className="stats-head">
          <h2 className="reveal in">Results, <em>in numbers</em><br/>that compound.</h2>
          <p className="reveal in d1">Built over hundreds of campaign iterations across the country. The receipts are below.</p>
        </div>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-num">
              <span className="prefix">$</span>{spend}<span className="suffix">K+</span>
            </div>
            <div className="stat-label">In ad spend managed</div>
            <div className="stat-sub">Across Meta, Google &amp; YouTube for our medspa partners.</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              {clients}<span className="suffix">+</span>
            </div>
            <div className="stat-label">Medspas served</div>
            <div className="stat-sub">From single-location boutiques to multi-state groups.</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              {reviews}<span className="suffix">★</span>
            </div>
            <div className="stat-label">5-star reviews</div>
            <div className="stat-sub">Verified founders, owners &amp; clinical directors.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== CASE STUDIES ==============
function Cases() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">Case studies</span>
            <h2 className="reveal in">Quiet rooms turned <em>fully booked</em> calendars.</h2>
          </div>
          <p className="right reveal in d1">
            Real campaigns, real numbers. Each engagement starts with an audit and a 90-day growth plan tailored to the location.
          </p>
        </div>

        <div className="cases reveal in">
          {/* BIG CASE */}
          <div className="case case-big">
            <div className="case-visual">
              <span className="case-tag">Scottsdale, AZ</span>
              <div className="case-metric-float">
                <div className="num">8.4<em>×</em></div>
                <div className="lbl">Return on ad spend</div>
              </div>
            </div>
            <div className="case-body">
              <h3 className="name">Glow &amp; <em>Co.</em> Aesthetics</h3>
              <div className="loc">Solo-owner medspa · Injectables &amp; laser</div>
              <p className="desc">
                Owner was running boosted posts with no funnel. We rebuilt the offer ladder around a $99 first-visit consult, launched Meta + Google, and installed a follow-up sequence that recovered no-shows.
              </p>
              <div className="case-metrics-row">
                <div className="m"><div className="v">412<em>%</em></div><div className="l">New patients lift</div></div>
                <div className="m"><div className="v">$<em>38</em></div><div className="l">Cost per booked consult</div></div>
                <div className="m"><div className="v">90<em>d</em></div><div className="l">To full calendar</div></div>
              </div>
            </div>
          </div>

          {/* SMALL CASE 1 */}
          <div className="case case-small">
            <div className="top">
              <div>
                <h3 className="name">Lumen <em>Aesthetic</em> Studio</h3>
                <div className="loc">Austin, TX · 2 locations</div>
              </div>
              <div className="badge"></div>
            </div>
            <div>
              <div className="big-num">+<em>317</em><span className="pct">%</span></div>
              <div className="lbl">Monthly booked revenue, 6 mo.</div>
            </div>
          </div>

          {/* SMALL CASE 2 */}
          <div className="case case-small">
            <div className="top">
              <div>
                <h3 className="name">Maven <em>Skin</em> Bar</h3>
                <div className="loc">Miami, FL · Boutique flagship</div>
              </div>
              <div className="badge b2"></div>
            </div>
            <div>
              <div className="big-num">$<em>12</em>K</div>
              <div className="lbl">Net new MRR from one campaign</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== SERVICES ==============
function Services() {
  const items = [
    { n: '01', icon: <Icon.target />, t: 'Paid Acquisition', d: 'Meta & Google ad systems built around your most profitable treatments and seasonal cadence.' },
    { n: '02', icon: <Icon.chart />, t: 'Funnels & Offers', d: 'Lead-magnet offers, landing pages, and qualification flows tuned to medspa buying behavior.' },
    { n: '03', icon: <Icon.bolt />, t: 'Booking Automations', d: 'SMS, email & DM sequences that recover no-shows and turn cold leads into deposits paid.' },
    { n: '04', icon: <Icon.spark />, t: 'Brand & Content', d: 'Founder-led short-form, before/after assets, and reputation pipelines that compound trust.' },
  ];
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">What we do</span>
            <h2 className="reveal in">A four-part system for <em>predictable</em> patient flow.</h2>
          </div>
          <p className="right reveal in d1">
            We don't sell isolated tactics. Every engagement plugs into one operating system designed to move new patients from scroll → consult → recurring.
          </p>
        </div>

        <div className="services-grid reveal in">
          {items.map((it, i) => (
            <div className="service" key={i}>
              <div>
                <div className="service-icon">{it.icon}</div>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
              <div className="service-num">— {it.n} / 04</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== PROCESS ==============
function Process() {
  const steps = [
    { n: '01', t: 'Audit', d: 'We dig into your numbers, offers, and creative — and tell you the truth, even when it stings.', dur: 'Week 1' },
    { n: '02', t: 'Install', d: 'Tracking, CRM hooks, landing pages and the first batch of creative go live and learn fast.', dur: 'Week 2–3' },
    { n: '03', t: 'Scale', d: 'Once a winning ad set proves out, we scale spend and rotate fresh creative weekly.', dur: 'Week 4–8' },
    { n: '04', t: 'Compound', d: 'We layer in nurture, reviews, and brand content so cost-per-patient drops month over month.', dur: 'Week 9+' },
  ];
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">Process</span>
            <h2 className="reveal in">A 90-day path from <em>audit</em> to full calendar.</h2>
          </div>
          <p className="right reveal in d1">
            We don't disappear after onboarding. You'll meet weekly with the same strategist who built your plan.
          </p>
        </div>
        <div className="process-grid reveal in">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="dur">{s.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== OFFER ==============
function Offer() {
  return (
    <section className="section offer-section" id="offer">
      <div className="offer-glow"></div>
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label" style={{color:'var(--sky-3)'}}>The offer</span>
            <h2 className="reveal in" style={{color:'var(--paper)'}}>You bring the chair.<br/><em>We bring everything else.</em></h2>
          </div>
          <p className="right reveal in d1" style={{color:'var(--sky-2)'}}>
            Most agencies hand you a dashboard and a bill. We hand you booked appointments. Two things make us different:
          </p>
        </div>

        <div className="offer-grid">
          <div className="offer-card reveal in">
            <div className="offer-badge">01</div>
            <div className="offer-amount">
              <span className="prefix">$</span>1,000<span className="suffix">.00</span>
            </div>
            <h3>In ad spend, <em>on us.</em></h3>
            <p>
              We don't just run your ads — we fund the first $1,000 in spend ourselves. If our system doesn't produce booked patients, you don't lose a dollar. We have skin in the game from day one.
            </p>
            <div className="offer-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Zero ad-spend risk
            </div>
          </div>

          <div className="offer-card reveal in d1">
            <div className="offer-badge">02</div>
            <div className="offer-amount offer-amount-text">
              <em>We call.</em><br/>You treat.
            </div>
            <h3>Dedicated sales team, <em>built in.</em></h3>
            <p>
              You won't sit on the phone chasing leads at 9pm. Our trained sales reps qualify every inquiry and book appointments directly into your calendar — so you can stay focused on treatments, not telemarketing.
            </p>
            <div className="offer-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Appointments, not lead lists
            </div>
          </div>
        </div>

        <div className="offer-strip reveal in d2">
          <div className="offer-strip-item">
            <span className="serif-i n">01.</span>
            <span>We launch the ads</span>
          </div>
          <span className="offer-arrow">→</span>
          <div className="offer-strip-item">
            <span className="serif-i n">02.</span>
            <span>Leads come in</span>
          </div>
          <span className="offer-arrow">→</span>
          <div className="offer-strip-item">
            <span className="serif-i n">03.</span>
            <span>Our reps call & qualify</span>
          </div>
          <span className="offer-arrow">→</span>
          <div className="offer-strip-item highlight">
            <span className="serif-i n">04.</span>
            <span>Patient walks in your door</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== REVIEWS ==============
function Reviews() {
  const reviews = [
    {
      q: "We went from <em>15 consults a month</em> to over 80 in the first quarter. They actually understand medspa unit economics.",
      n: 'Dr. Priya Shah', r: 'Owner · Lumen Aesthetic Studio', c: '#1B3457'
    },
    {
      q: "Best <em>marketing investment</em> we've ever made. They replaced two agencies and a part-time hire — and outperformed all three.",
      n: 'Marcus Calle', r: 'Founder · Glow & Co.', c: '#0E2244'
    },
    {
      q: "Our calendar is finally <em>predictable</em>. I sleep better, my injectors are booked, and our deposit rate doubled.",
      n: 'Brianna Otero', r: 'Clinical Director · Maven Skin Bar', c: '#6FA0CB'
    },
    {
      q: "What surprised me most was the <em>creative quality</em>. The before/after ads feel like our brand, not a template.",
      n: 'Sasha Lim', r: 'CMO · Atelier Beauty Group', c: '#1B3457'
    },
    {
      q: "They told me to <em>stop</em> running a campaign that wasn't profitable. That alone was worth the retainer.",
      n: 'Kai Bennett', r: 'Owner · Cove Aesthetics', c: '#0E2244'
    },
    {
      q: "Three locations, one system, <em>zero chaos</em>. I'd recommend Ignited Spa to any operator scaling past a single chair.",
      n: 'Daniela Reyes', r: 'CEO · Reyes Med Group', c: '#6FA0CB'
    },
  ];

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="s-head reviews-header-row">
          <div>
            <span className="label">What owners say</span>
            <h2 className="reveal in">Loved by the people <em>actually running</em> the rooms.</h2>
          </div>
          <div className="rating-large reveal in d1">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Icon.star key={i} />)}
            </div>
            <div className="meta"><strong>4.9 average</strong> · 23 verified 5-star reviews</div>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className={"review reveal in d" + ((i%4))} key={i}>
              <div className="stars">{[...Array(5)].map((_, j) => <Icon.star key={j} />)}</div>
              <p className="quote" dangerouslySetInnerHTML={{__html: '"' + r.q + '"'}}></p>
              <div className="author">
                <div className="avatar" style={{background: `linear-gradient(135deg, ${r.c}, var(--navy-3))`}}>
                  {r.n.split(' ').map(p => p[0]).slice(0,2).join('')}
                </div>
                <div className="who">
                  <div className="n">{r.n}</div>
                  <div className="r">{r.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== CTA ==============
function CTA() {
  return (
    <section className="section cta-section" id="contact">
      <div className="cta-orb"></div>
      <div className="container">
        <div className="cta-grid">
          <div className="cta-copy">
            <span className="eyebrow" style={{background:'rgba(255,255,255,0.1)', color:'var(--sky-2)', borderColor:'rgba(255,255,255,0.15)'}}>
              <span className="pulse"></span>
              $1,000 in ad spend on us · May 2026
            </span>
            <h2 className="reveal in">Let's <em>ignite</em><br/>your calendar.</h2>
            <p className="reveal in d1">
              Book a 20-minute strategy call. We'll audit your current funnel, show you exactly where the leaks are, and — if you're a fit — cover your first $1,000 in ad spend.
            </p>
            <div className="cta-meta reveal in d2">
              <span className="item">$1K ad spend covered</span>
              <span className="item">We book your appointments</span>
              <span className="item">No contracts</span>
            </div>
            <div className="cta-quote reveal in d3">
              <div className="cta-quote-stars">
                {[...Array(5)].map((_, i) => <Icon.star key={i} />)}
              </div>
              <p>"They told me to <em>stop</em> running a campaign that wasn't profitable. That alone was worth the retainer."</p>
              <div className="cta-quote-who">
                <strong>Kai Bennett</strong> · Owner, Cove Aesthetics
              </div>
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

// ============== FOOTER ==============
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{color:'var(--paper)'}}>
              <span className="logo-mark"></span>
              <span>Ignited<span className="serif-i" style={{marginLeft:'4px', color:'var(--sky-3)'}}>Spa</span></span>
            </div>
            <p className="blurb">B2B performance marketing for medical spas. Built by operators who've sat in your chair.</p>
          </div>
          <div>
            <h4>Agency</h4>
            <ul>
              <li><a href="#work">Case studies</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#offer">The offer</a></li>
              <li><a href="#contact">Free audit</a></li>
              <li><a href="#process">Our process</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="privacy-policy.html">Privacy policy</a></li>
              <li><a href="terms.html">Terms &amp; conditions</a></li>
              <li><a href="mailto:hello@ignitedspa.com">hello@ignitedspa.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ignited Spa. All rights reserved.</span>
          <span>Made for medspa operators. Nothing here is medical advice.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Stats, Cases, Services, Process, Offer, Reviews, CTA, Footer, useReveal });
