// About page content
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 7h7.1l-5.7 4.4 2.2 7.1L12 16.3 5.5 20.5l2.2-7.1L2 9h7.1z"/></svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
);

function AboutHero() {
  return (
    <section className="about-hero" aria-label="About Ignited Spa">
      <div className="about-hero-orb"></div>
      <div className="about-hero-orb-2"></div>
      <div className="container">
        <div className="about-hero-inner">
          <nav aria-label="Breadcrumb" className="about-crumb">
            <a href="index.html">Home</a>
            <span>→</span>
            <span>About</span>
          </nav>
          <div className="about-eyebrow reveal in">
            <span className="eyebrow">
              <span className="pulse"></span>
              Medspa-only · Founded 2022
            </span>
          </div>
          <h1 className="reveal in d1">
            Built by people who<br/>
            understood the <em>problem.</em>
          </h1>
          <p className="about-hero-sub reveal in d2">
            Medspa owners are some of the most skilled clinicians in the country.
            They're not marketers. We are. And we work exclusively in their world — so
            every system, script, and strategy is built for this specific industry.
          </p>
          <div className="about-hero-stats reveal in d3">
            <div className="ah-stat">
              <span className="ah-num serif">$124<span className="ah-suf">K+</span></span>
              <span className="ah-lbl">Ad spend managed</span>
            </div>
            <div className="ah-stat">
              <span className="ah-num serif">38<span className="ah-suf">+</span></span>
              <span className="ah-lbl">Medspas served</span>
            </div>
            <div className="ah-stat">
              <span className="ah-num serif">4.9<span className="ah-suf">★</span></span>
              <span className="ah-lbl">Average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMission() {
  return (
    <section className="section about-mission">
      <div className="container">
        <div className="about-mission-grid">
          <div className="reveal in">
            <span className="label" style={{fontSize:'12px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--navy-2)',display:'flex',alignItems:'center',gap:'10px'}}>
              <span style={{width:'24px',height:'1px',background:'var(--navy-2)',display:'inline-block'}}></span>
              Our mission
            </span>
            <h2 className="serif" style={{fontSize:'clamp(40px,6vw,72px)',lineHeight:'0.95',letterSpacing:'-0.02em',margin:'16px 0 0',maxWidth:'14ch'}}>
              Fill every chair.<br/>In every room.<br/><em>Every week.</em>
            </h2>
          </div>
          <div className="about-mission-right reveal in d1">
            <p>
              The medical spa industry grows by more than <strong>12% per year</strong> — but most medspa owners are still relying on word-of-mouth and boosted posts to drive new patients. That gap is the problem we exist to close.
            </p>
            <p>
              We chose to stay narrow on purpose. By working exclusively with medical spas, we build institutional knowledge that a generalist agency simply can't match. We know your treatment economics, your seasonal rhythms, your compliance requirements, and what makes a patient convert vs. disappear.
            </p>
            <p>
              Our model is simple: we run the ads, build the systems, staff the phones, and book the calendar. You show up and treat. Nothing more.
            </p>
            <div className="about-mission-checks">
              {['No medical claims ever run in our creative', 'HIPAA-conscious lead handling', 'Medspa-specific audience targeting', 'Treatment-level ROAS tracking'].map((t,i) => (
                <div className="ach" key={i}>
                  <span className="ach-icon"><CheckIcon /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <section className="section about-story-section" aria-label="Our origin story">
      <div className="container">
        <div className="about-story-pull reveal in">
          <span className="story-quote-mark serif-i">"</span>
          <blockquote>
            We watched great medspas close — not because they lacked skill, but because
            they couldn't fill the calendar. That's a <em>solvable</em> problem.
          </blockquote>
          <div className="story-attr">— Founder, Ignited Spa</div>
        </div>

        <div className="about-story-grid reveal in d1">
          <div className="story-year">
            <span className="serif-i sy-num">2022</span>
            <div className="sy-line"></div>
          </div>
          <div className="story-body">
            <h2>Why we went<br/><em>medspa-only.</em></h2>
            <p>
              The agency was founded after watching talented clinicians — injectors, laser techs, nurse practitioners running their own practice — struggle to grow beyond referrals. They were outsourcing marketing to generalist agencies, paying retainers, and getting dental-clinic templates in return.
            </p>
            <p>
              We went all-in on the niche. Built proprietary offer frameworks for consult-based services. Hired sales reps who understood aesthetic vocabulary. Built compliance guardrails into every creative brief. Learned the difference between a "filler curious" cold lead and a ready-to-book patient.
            </p>
            <p>
              Three years later, our clients are fully booked — and we've never worked with anyone outside the aesthetic medicine space. That's intentional. It's what makes the results possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutDiff() {
  const items = [
    {
      n: '01', t: 'Industry depth', em: false,
      d: 'We only work in medical aesthetics. That means every funnel, ad angle, and offer is calibrated to how medspa patients actually think and buy.'
    },
    {
      n: '02', t: 'Skin in the game', em: true,
      d: "We cover the first $1,000 in ad spend for new partners. If our system doesn\u2019t produce \u2014 we absorb the loss, not you."
    },
    {
      n: '03', t: 'We book the appointments', em: true,
      d: 'Our in-house sales team calls every inbound lead, qualifies them, and books them into your calendar. No lead lists. No cold calling for you.'
    },
    {
      n: '04', t: 'Transparent reporting', em: false,
      d: 'Live dashboards show cost-per-consult, ROAS, show rate, and revenue per campaign — no vanity metrics, no spin.'
    },
  ];
  return (
    <section className="section about-diff-section" aria-label="What makes us different">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">Why Ignited Spa</span>
            <h2 className="reveal in">Four things <em>no other agency</em><br/>does for medspas.</h2>
          </div>
          <p className="right reveal in d1">
            We're not trying to be the biggest agency. We're trying to be the best one for this specific kind of business.
          </p>
        </div>
        <div className="about-diff-grid">
          {items.map((it, i) => (
            <div className={"about-diff-card reveal in d" + (i % 3)} key={i}>
              <div className="adc-num serif-i">{it.n}</div>
              <h3>{it.t}{it.em && <span className="adc-badge">Unique</span>}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeam() {
  const team = [
    { init: 'JR', name: 'Jordan R.', role: 'Founder & Head Strategist', bg: '#0E2244', note: '8 yrs in performance marketing; former head of growth at a national aesthetic group.' },
    { init: 'MC', name: 'Maya C.', role: 'Creative Director', bg: '#1B3457', note: 'Specializes in medspa-compliant UGC, before/after creative, and founder-led content.' },
    { init: 'DT', name: 'Daniel T.', role: 'Head of Sales Operations', bg: '#6FA0CB', note: 'Runs our appointment-booking team. Former aesthetic sales trainer. 10k+ calls booked.' },
    { init: 'SP', name: 'Sofia P.', role: 'Paid Media Lead', bg: '#0A1F3D', note: 'Meta & Google certified. Manages $80K+ monthly in medspa ad spend across 15+ accounts.' },
  ];
  return (
    <section className="section about-team-section" aria-label="Our team">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">The team</span>
            <h2 className="reveal in">People who only think<br/>about <em>medspa growth.</em></h2>
          </div>
          <p className="right reveal in d1">
            Every team member here has worked in or with the aesthetic industry. No generalists.
          </p>
        </div>
        <div className="about-team-grid">
          {team.map((m, i) => (
            <div className={"about-team-card reveal in d" + (i % 3)} key={i}>
              <div className="atc-avatar" style={{background: `linear-gradient(135deg, ${m.bg}, var(--navy-3))`}}>
                {m.init}
              </div>
              <h3 className="atc-name">{m.name}</h3>
              <div className="atc-role">{m.role}</div>
              <p className="atc-note">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutValues() {
  const vals = [
    { t: 'Niche over scale', d: 'We will never work outside of medical aesthetics. Staying narrow is how we stay exceptional.' },
    { t: 'Accountability first', d: "We cover $1K in ad spend because we believe in what we\u2019ve built enough to fund it ourselves." },
    { t: 'No black boxes', d: "Every report, metric, and decision is visible. You\u2019ll always know exactly where your money is and what it\u2019s producing." },
    { t: 'Clinician respect', d: "You spent years learning your craft. We spend our years learning ours. We never minimize the expertise it takes to run a medspa." },
  ];
  return (
    <section className="section about-values-section">
      <div className="container">
        <div className="s-head">
          <div>
            <span className="label">Our values</span>
            <h2 className="reveal in">What we believe<br/>about <em>the work.</em></h2>
          </div>
        </div>
        <div className="about-values-grid">
          {vals.map((v, i) => (
            <div className={"about-val reveal in d" + (i % 3)} key={i}>
              <div className="av-num serif-i">0{i+1}</div>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutReviewsBar() {
  return (
    <section className="about-reviews-bar">
      <div className="container">
        <div className="arb-inner reveal in">
          <div className="arb-left">
            <div className="arb-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <div className="arb-num serif">4.9</div>
            <div className="arb-meta">out of 5 · 23 verified reviews from medspa owners</div>
          </div>
          <a href="index.html#reviews" className="arb-cta">
            Read all reviews <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="section cta-section" id="contact" style={{paddingTop:'100px', paddingBottom:'100px'}}>
      <div className="cta-orb"></div>
      <div className="container">
        <div className="cta-grid">
          <div className="cta-copy">
            <span className="eyebrow" style={{background:'rgba(255,255,255,0.1)', color:'var(--sky-2)', borderColor:'rgba(255,255,255,0.15)'}}>
              <span className="pulse"></span>
              $1,000 in ad spend on us
            </span>
            <h2 className="reveal in">Ready to <em>ignite</em><br/>your calendar?</h2>
            <p className="reveal in d1">
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

function AboutApp() {
  useEffectA(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="main-content">
        <AboutHero />
        <AboutMission />
        <AboutStory />
        <AboutDiff />
        <AboutTeam />
        <AboutValues />
        <AboutReviewsBar />
        <AboutCTA />
      </main>
      <Footer />
      <LeadPill />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
