(function () {
  const Check = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Phone = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
  );

  function ServiceCallQualify() {
    usePageReveal();
    return (
      <>
        <Nav />
        <main id="main-content">
          <PageHero
            crumbs={[
              { href: 'index.html', label: 'Home' },
              { href: 'index.html#services', label: 'Services' },
              { label: 'Call & Qualify' },
            ]}
            eyebrow="Service · In-House Sales Team · Speed-to-Lead"
            h1="We call your leads<br/>within <em>minutes.</em><br/>You treat patients."
            sub="The average business takes 47 hours to respond to a new inquiry. By then, the patient has booked elsewhere. Our in-house sales team responds in under 5 minutes — and doesn't stop until the appointment is booked and the deposit is paid."
            stats={[
              { num: '<span class="ah-suf">&lt;</span>5<span class="ah-suf">min</span>', label: 'Avg speed-to-lead' },
              { num: '88<span class="ah-suf">%</span>', label: 'Show rate with deposits' },
              { num: '22<span class="ah-suf">%</span>', label: 'Recovery from follow-up seq.' },
            ]}
          />

          <section className="section" style={{ background: 'var(--paper)' }}>
            <div className="container">
              <div className="page-layout">
                <div className="page-body">
                  <h3>The <em>speed-to-lead</em> problem</h3>
                  <p>Speed-to-lead is the most consistently underestimated lever in medspa marketing. Studies across service businesses show that <strong>leads contacted within 5 minutes are 21× more likely to qualify than those contacted after 30 minutes.</strong> After an hour, that number drops dramatically again. After 24 hours, most leads are either booked elsewhere or have lost the impulse entirely.</p>
                  <p>Most medspa owners and front desk teams simply can't respond at that speed while running a full clinic. They're in treatment rooms, on the phone with existing patients, or handling the hundred other operational demands of a busy practice. The leads pile up. The follow-up happens when there's time — which is usually not fast enough.</p>
                  <p>We solve this by being the first call, every time.</p>

                  <h3>What's <em>included</em></h3>
                  <div className="page-features reveal in">
                    <PageFeature icon={<Phone />} title="Real-time lead response" desc="Every inbound lead triggers an immediate notification to our sales team. We call within an average of 4 minutes during business hours, and within 15 minutes outside of them." />
                    <PageFeature icon={<Check />} title="Medspa-trained qualification scripts" desc="Our reps are trained on aesthetic medicine — treatment types, typical pricing, patient objections, and how to have a conversation that builds trust without overselling. They know the difference between botox curiosity and a ready-to-book patient." />
                    <PageFeature icon={<Phone />} title="Deposit collection before booking" desc="We don't book appointments without a deposit. This single practice reduces no-show rates from an industry-average ~40% to under 12% for our clients. Only committed patients land on your calendar." />
                    <PageFeature icon={<Check />} title="7-touch follow-up sequence" desc="Leads that don't immediately book enter a structured follow-up: 2 SMS, 3 emails, and 2 additional call attempts over 7 days. This sequence recovers 20–25% of leads that initially didn't convert." />
                    <PageFeature icon={<Phone />} title="No-show recovery" desc="For patients who miss their appointment, an automatic re-booking sequence activates within 2 hours — capturing the slot before it sits empty." />
                    <PageFeature icon={<Check />} title="CRM logging & handoff notes" desc="Every call is logged in your CRM with qualification notes. When a patient walks in, your team knows exactly who they are, what they're interested in, and what was discussed." />
                  </div>

                  <PagePull
                    quote="Their team calls every lead within minutes and takes the deposit before they ever hit our calendar. <em>Show rates jumped overnight.</em>"
                    cite="— Alyssa Park, Owner, Cove Aesthetics"
                  />
                </div>
                <PageSidebar
                  heading="How fast are <em>your</em> leads getting called?"
                  body="Most practices are losing 30–40% of their leads to slow follow-up. We can fix that from day one."
                />
              </div>
            </div>
          </section>

          <PageRelated
            heading="Related services & results."
            items={[
              { href: 'case-study-maven.html', eyebrow: 'Miami, FL', title: 'Maven <em>Skin</em> Bar', stat: '88<em>%</em>', meta: 'Show rate via deposit-first booking' },
              { href: 'service-funnels-offers.html', eyebrow: 'Service', title: 'Funnels &amp; <em>Offers</em>', stat: '→', meta: 'Build the offer that attracts better leads' },
              { href: 'service-book-calendar.html', eyebrow: 'Service', title: 'Book the <em>Calendar</em>', stat: '→', meta: 'Patients land in your system, not a list' },
            ]}
          />
          <PageCTA />
        </main>
        <Footer />
        <LeadPill />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<ServiceCallQualify />);
})();
