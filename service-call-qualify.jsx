(function () {
  const Check = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Cal = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  );

  function ServiceBookCalendar() {
    usePageReveal();
    return (
      <>
        <Nav />
        <main id="main-content">
          <PageHero
            crumbs={[
              { href: 'index.html', label: 'Home' },
              { href: 'index.html#services', label: 'Services' },
              { label: 'Book the Calendar' },
            ]}
            eyebrow="Service · End-to-End Booking · Zero Lead-Chasing"
            h1="You walk in.<br/>Patients are <em>already</em><br/>on the calendar."
            sub="We handle everything between a patient seeing your ad and sitting in your treatment chair. Qualified, deposit-paid patients land directly in your booking system. No lead lists. No follow-up work for your team."
          />

          <section className="section" style={{ background: 'var(--paper)' }}>
            <div className="container">
              <div className="page-layout">
                <div className="page-body">
                  <h3>What <em>fully booked</em> actually means</h3>
                  <p>There's a difference between a full appointment book and a <em>productive</em> appointment book. A lead list is not a full calendar. A CRM with 200 uncontacted names is not revenue. A calendar filled with patients who haven't paid a deposit, who found you via a discount ad, and who may or may not show up — that's not the goal.</p>
                  <p>We define a booked patient as: a qualified prospect who has spoken to our sales team, confirmed their intent, paid a deposit, and has a confirmed slot in your booking system. That's the only kind of patient we put on your calendar. Everything else is noise.</p>

                  <h3>What's <em>included</em></h3>
                  <div className="page-features reveal in">
                    <PageFeature icon={<Cal />} title="Direct booking system integration" desc="We integrate with your existing scheduling software — Jane App, Mindbody, Aesthetic Record, Vagaro, or a custom system. Patients are booked directly, not added to a waiting list." />
                    <PageFeature icon={<Check />} title="Deposit-first confirmation" desc="No appointment is confirmed without a booking deposit. This eliminates no-shows, filters out low-intent inquiries, and ensures the patients on your calendar are committed." />
                    <PageFeature icon={<Cal />} title="Automated reminders & prep sequences" desc="After booking, patients receive a confirmation sequence that includes appointment reminders, pre-treatment instructions, and brand-building content. They arrive prepared." />
                    <PageFeature icon={<Check />} title="Cancellation & reschedule flow" desc="When a patient cancels, an automated re-booking sequence activates immediately — protecting revenue and filling the slot before it goes empty. We recover 60–70% of cancelled appointments." />
                    <PageFeature icon={<Cal />} title="Post-visit retention sequences" desc="After the first visit, patients enter a nurture sequence designed to bring them back for their next treatment. Repeat patients are your most profitable — we build the system that creates them." />
                    <PageFeature icon={<Check />} title="Show rate reporting" desc="You see your show rate, cancellation rate, rebook rate, and per-patient revenue — tracked weekly. If show rates dip, we identify the cause and fix it." />
                  </div>

                  <PagePull
                    quote="Three locations, one system, <em>zero chaos.</em> I'd recommend Ignited Spa to any operator looking to scale past one location."
                    cite="— Daniela Reyes, CEO, Reyes Med Group"
                  />

                  <h3>The full <em>patient journey</em></h3>
                  <p>Every step between ad click and treatment chair is owned, tracked, and optimized by our team:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '24px 0' }}>
                    {[
                      ['01', 'Ad seen → landing page → intake form submitted'],
                      ['02', 'Sales team calls within 5 min → qualifies patient'],
                      ['03', 'Deposit taken → appointment booked in your system'],
                      ['04', 'Reminder + prep sequence sent to patient'],
                      ['05', 'Patient arrives, treated, re-booking sequence begins'],
                    ].map(([n, t]) => (
                      <div key={n} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 18px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px' }}>
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '18px', color: 'var(--sky-3)', flexShrink: 0, lineHeight: '1.4' }}>{n}</span>
                        <span style={{ fontSize: '14px', color: 'var(--mute)', lineHeight: '1.55' }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <PageSidebar
                  heading="Ready for a <em>full calendar?</em>"
                  body="Book a 20-minute call and we'll show you exactly how the end-to-end booking system works for your practice."
                />
              </div>
            </div>
          </section>

          <PageRelated
            heading="Related services & results."
            items={[
              { href: 'service-call-qualify.html', eyebrow: 'Service', title: 'Call &amp; <em>Qualify</em>', stat: '→', meta: 'Speed-to-lead in under 5 minutes' },
              { href: 'case-study-glow-co.html', eyebrow: 'Scottsdale, AZ', title: 'Glow &amp; <em>Co.</em> Aesthetics', stat: '90<em>d</em>', meta: 'Days to full calendar' },
              { href: 'case-study-lumen.html', eyebrow: 'Austin, TX', title: 'Lumen <em>Aesthetic</em> Studio', stat: '+317<em>%</em>', meta: 'Revenue growth in 6 months' },
            ]}
          />
          <PageCTA />
        </main>
        <Footer />
        <LeadPill />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<ServiceBookCalendar />);
})();
