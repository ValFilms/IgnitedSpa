(function () {
  const { useEffect } = React;

  function CaseStudyGlowCo() {
    usePageReveal();
    return (
      <>
        <Nav />
        <main id="main-content">
          <PageHero
            crumbs={[
              { href: 'index.html', label: 'Home' },
              { href: 'index.html#work', label: 'Case studies' },
              { label: 'Glow & Co. Aesthetics' },
            ]}
            eyebrow="Case Study · Scottsdale, AZ · Injectables & Laser"
            h1="From boosted posts<br/>to <em>8.4× return</em><br/>on ad spend."
            sub="A solo-owner medspa in Scottsdale was capped at 15 consults a month and burning budget on ads with nothing to show for it. Here's exactly what we built — and the results 90 days in."
            stats={[
              { num: '8.4<span class="ah-suf">×</span>', label: 'Return on ad spend' },
              { num: '412<span class="ah-suf">%</span>', label: 'New patient lift' },
              { num: '$38', label: 'Cost per booked consult' },
              { num: '90<span class="ah-suf">d</span>', label: 'To full calendar' },
            ]}
          />

          <section className="section" style={{ background: 'var(--paper)' }}>
            <div className="container">
              <div className="page-layout">
                <div className="page-body">

                  <h3>The <em>challenge</em></h3>
                  <p>Marcus Calle had built something rare in Scottsdale: a medspa with genuinely skilled injectors, excellent reviews, and a loyal core of returning patients. The problem wasn't the clinic — it was the calendar. Despite running boosted posts and a brief stint with a generalist agency, the practice was stuck at roughly 15 consults per month. Most weeks, two out of three treatment rooms sat empty by Thursday afternoon.</p>
                  <p>The root issues were layered. The boosted posts were reaching a broad, low-intent audience with no qualification step. There was no conversion tracking — no way to know which ad, if any, was producing patients. The agency had delivered a "dental-clinic template" campaign that ignored the specific psychology of aesthetic patients. And when leads did come in, no one was calling them fast enough. By the time the front desk followed up, they'd booked elsewhere.</p>

                  <h3>What we <em>built</em></h3>
                  <p>We started with a full audit of Marcus's existing funnel — ad account, landing page, CRM setup, and lead response process. The diagnosis was clear: reach without a system is just noise. Here's what we installed:</p>
                  <p><strong>Signature offer architecture.</strong> We built a "Timeless Glow Laser Facial" at $149 — an accessible entry point designed to drive first visits without positioning the clinic as a discount provider. The offer was engineered to showcase the team's skill and convert first-time patients into repeat facial + injectable clients.</p>
                  <p><strong>Meta + Google campaign system.</strong> We launched Meta campaigns targeting Scottsdale women aged 28–58 with interest in aesthetics, skincare, and competitors' pages. Simultaneously, Google Search campaigns targeted high-intent local terms ("laser facial scottsdale," "botox consultation near me"). Both campaigns fed into a dedicated landing page — not the homepage — with a single conversion goal.</p>
                  <p><strong>Speed-to-lead response.</strong> Our in-house sales team received every inbound lead in real time and called within an average of 4 minutes. Response speed is the single most powerful predictor of booking rate. We also collected a $50 booking deposit on every consult — reducing no-shows from ~40% to under 12%.</p>
                  <p><strong>7-touch follow-up sequence.</strong> Every lead that didn't immediately book entered an automated follow-up sequence: 2 SMS, 3 emails, and 2 outbound call attempts over 7 days. This sequence alone recovered 22% of leads that initially didn't book.</p>
                  <p><strong>No-show recovery.</strong> For patients who missed their appointment, an automated re-booking sequence recaptured them within 48 hours with a priority rescheduling link.</p>

                  <PagePull
                    quote="Best <em>marketing investment</em> we've ever made. They replaced two agencies and a part-time hire — and outperformed all three."
                    cite="— Marcus Calle, Founder, Glow & Co. Aesthetics"
                  />

                  <h3>The <em>results</em></h3>
                  <p>By day 90, Marcus's calendar was fully booked. The metrics below are calculated from verified campaign data and the clinic's booking system, covering the 90-day engagement window.</p>

                  <PageMetrics items={[
                    { val: '8.4<em>×</em>', label: 'ROAS (revenue ÷ total ad spend)' },
                    { val: '412<em>%</em>', label: 'New patient lift vs. prior 90 days' },
                    { val: '$<em>38</em>', label: 'Avg cost per booked consult' },
                    { val: '90<em>d</em>', label: 'Days to full calendar' },
                  ]} />

                  <p>Beyond the headline numbers: average patient LTV increased as the new patient cohort converted to quarterly filler and laser maintenance schedules. The $149 entry offer had done its job — most new patients booked a second treatment within 60 days.</p>

                </div>
                <PageSidebar
                  heading="Want results <em>like this</em>?"
                  body="Book a 20-minute strategy call. We'll audit your current funnel and show you where the leaks are — before you spend another dollar on ads."
                />
              </div>
            </div>
          </section>

          <PageRelated
            heading="More medspa transformations."
            items={[
              { href: 'case-study-lumen.html', eyebrow: 'Austin, TX · 2 Locations', title: 'Lumen <em>Aesthetic</em> Studio', stat: '+317<em>%</em>', meta: 'Monthly booked revenue in 6 months' },
              { href: 'case-study-maven.html', eyebrow: 'Miami, FL · Boutique flagship', title: 'Maven <em>Skin</em> Bar', stat: '$<em>12</em>K', meta: 'Net new MRR from one campaign' },
              { href: 'why-ignited-spa.html', eyebrow: 'Why Ignited Spa', title: 'What makes us <em>different</em>', stat: '4<em>×</em>', meta: 'Things no other medspa agency does' },
            ]}
          />

          <PageCTA />
        </main>
        <Footer />
        <LeadPill />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyGlowCo />);
})();
