(function () {

  function WhyIgnitedSpa() {
    usePageReveal();

    const diffs = [
      {
        n: '01',
        title: <>Industry <em>depth</em></>,
        flip: false,
        content: (
          <>
            <p>Medspa marketing isn't just regular service-business marketing with a different name on the template. The compliance environment is different — no medical claims, no before/after language in certain contexts, no misleading outcome guarantees. The patient psychology is different — aesthetic decisions are emotionally driven, identity-linked, and often require a trust-building sequence before the booking. The seasonality is different: Q4 gifting, summer laser windows, new-year weight-loss cycles, Valentine's injectables. The offer structure is different — consult-based, with a treatment ladder that looks nothing like a retail funnel.</p>
            <p>We chose to work only in this space because we wanted to be <strong>actually good at what we do</strong> — not merely adequate across twenty verticals. After four years and hundreds of campaigns across injectables, laser, weight loss, IV therapy, and skin tightening, we have pattern recognition that a generalist agency simply cannot build. We know which creative hooks burn out fastest. We know which offers convert cold traffic vs. warm retargeting audiences. We know how to structure a funnel for a $149 intro facial vs. a $3,000 CoolSculpting package. That depth is not available anywhere else.</p>
          </>
        ),
      },
      {
        n: '02',
        title: <>Skin in <em>the game</em></>,
        flip: true,
        content: (
          <>
            <p>When we say we cover the first $1,000 in ad spend, we mean it literally. We fund that spend ourselves. If the campaign doesn't produce booked patients in the first 30 days, you don't absorb the loss — we do.</p>
            <p>Why do we offer this? Because it changes the dynamic of the relationship from day one. You're not the only one with money on the table. We are too. That means we are structurally <strong>incentivized to produce results</strong>, not just activity. We can't hide behind reach metrics or click-through rates. The only scorecard that matters is patients on your calendar — and both of us are watching it.</p>
            <p>It also means we don't take on clients we don't believe in. If we're covering your first $1K, we've already decided that your market, your offer, and your practice are set up for this to work. Every engagement starts with genuine conviction, not just a signed contract.</p>
          </>
        ),
      },
      {
        n: '03',
        title: <>We book the <em>appointments</em></>,
        flip: false,
        content: (
          <>
            <p>The gap between an inbound lead and a booked patient is where most agencies go silent. They deliver leads into a spreadsheet and call it done. What actually happens to those leads then depends on whether you or your front desk has time to chase them — which, in a busy clinic running three rooms simultaneously, they often don't.</p>
            <p>We close that gap. Our trained in-house sales reps receive every lead in real time, <strong>call within an average of 4 minutes</strong> (speed-to-lead is the single most powerful predictor of booking rate), qualify the patient against your intake criteria, and take a booking deposit before putting them on your calendar.</p>
            <p>You walk in the next morning to confirmed, deposit-paid appointments. Not a list of names to call back. Not a CRM full of cold leads from last week. Confirmed patients — the kind who show up, who are prepared for your pricing, and who have already started mentally committing to the treatment. That's a fundamentally different starting point for every consult.</p>
          </>
        ),
      },
      {
        n: '04',
        title: <>Transparent <em>reporting</em></>,
        flip: true,
        content: (
          <>
            <p>We don't hide behind vanity metrics. Every client gets a live dashboard that shows: <strong>cost per lead, cost per booked consult, show rate, treatment conversion rate, revenue attributed to campaigns, and ROAS</strong> — broken down by campaign and ad set. You can see exactly what your monthly ad spend produced. Not reach. Not impressions. Not CTR. Patients.</p>
            <p>Most agencies obscure performance behind lagging indicators because it's easier to explain a good-looking reach number than a bad booking rate. We don't do that. If a campaign isn't performing, you'll see it in the dashboard at the same time we do — and you'll hear from us that week with a hypothesis and a plan, not a defensive explanation three months later.</p>
            <p>Transparency also means you own your data. Your ad accounts, your pixel, your CRM — everything is in your name. If we ever part ways, you leave with everything intact. No held-hostage assets, no vendor lock-in. Just the results we produced together and the infrastructure we built for you.</p>
          </>
        ),
      },
    ];

    return (
      <>
        <Nav />
        <main id="main-content">
          <PageHero
            crumbs={[
              { href: 'index.html', label: 'Home' },
              { href: 'about.html', label: 'About' },
              { label: 'Why Ignited Spa' },
            ]}
            eyebrow="Why Ignited Spa · Medspa-only since 2022"
            h1="Four things <em>no other</em><br/>medspa agency does."
            sub="We're not trying to be the biggest marketing agency. We're trying to be the best one for this specific kind of business. Here's what that actually means in practice."
          />

          <section className="section" style={{ background: 'var(--paper)', paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
              {diffs.map((d, i) => (
                <div className={'why-diff-section reveal in'} key={i} id={'diff-0' + (i + 1)}>
                  <div className={'why-diff-inner' + (d.flip ? ' flip' : '')}>
                    <div className="why-diff-label">
                      <span className="why-num serif-i">{d.n}</span>
                      <div className="why-title">{d.title}</div>
                    </div>
                    <div className="why-diff-content">{d.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <PageRelated
            heading="See the results in action."
            items={[
              { href: 'case-study-glow-co.html', eyebrow: 'Scottsdale, AZ', title: 'Glow &amp; <em>Co.</em> Aesthetics', stat: '8.4<em>×</em>', meta: 'Return on ad spend in 90 days' },
              { href: 'case-study-lumen.html', eyebrow: 'Austin, TX', title: 'Lumen <em>Aesthetic</em> Studio', stat: '+317<em>%</em>', meta: 'Monthly booked revenue in 6 months' },
              { href: 'case-study-maven.html', eyebrow: 'Miami, FL', title: 'Maven <em>Skin</em> Bar', stat: '$<em>12</em>K', meta: 'Net new MRR from one campaign' },
            ]}
          />

          <PageCTA />
        </main>
        <Footer />
        <LeadPill />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<WhyIgnitedSpa />);
})();
