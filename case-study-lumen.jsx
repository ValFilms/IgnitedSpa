(function () {
  const { useEffect } = React;

  function CaseStudyLumen() {
    usePageReveal();
    return (
      <>
        <Nav />
        <main id="main-content">
          <PageHero
            crumbs={[
              { href: 'index.html', label: 'Home' },
              { href: 'index.html#work', label: 'Case studies' },
              { label: 'Lumen Aesthetic Studio' },
            ]}
            eyebrow="Case Study · Austin, TX · 2 Locations"
            h1="Two locations.<br/>One system.<br/><em>+317% revenue.</em>"
            sub="When Dr. Priya Shah opened her second Austin location, she expected momentum. Instead, she got inconsistency. Here's how we unified the marketing engine across both clinics — and what happened next."
            stats={[
              { num: '+317<span class="ah-suf">%</span>', label: 'Monthly booked revenue' },
              { num: '80<span class="ah-suf">+</span>', label: 'Consults/month (was 15)' },
              { num: '6<span class="ah-suf">mo</span>', label: 'Time to result' },
              { num: '2.9<span class="ah-suf">×</span>', label: 'Lower CPL vs. prior efforts' },
            ]}
          />

          <section className="section" style={{ background: 'var(--paper)' }}>
            <div className="container">
              <div className="page-layout">
                <div className="page-body">

                  <h3>The <em>challenge</em></h3>
                  <p>Dr. Shah's original Lumen Aesthetic Studio location had grown steadily over three years on a combination of referrals, organic social, and a modest ad budget. When she opened a second location on the other side of Austin, she assumed the momentum would transfer. It didn't.</p>
                  <p>Location two was generating half the patient volume despite being in an equally strong market. The two locations were running separate ad accounts, separate landing pages, and separate intake processes — meaning the algorithm had no shared data, no cross-location learning, and no unified story to tell potential patients. A patient searching "medspa Austin" might see two different ads, two different offers, and arrive at two different web pages. The system was working against itself.</p>
                  <p>Staff time was also being consumed by the volume discrepancy. The original location was overbooked; the new one had availability it couldn't fill. Without a centralized intake and routing system, leads at the wrong location either dropped off or required manual effort to redirect.</p>

                  <h3>What we <em>built</em></h3>
                  <p><strong>Unified campaign architecture.</strong> We consolidated both locations under a single Meta Business account, enabling shared audience learning, shared pixel data, and algorithmic optimization across the full Austin market. Rather than splitting budget and diluting data, we let Meta decide which location to serve each ad to based on geographic and behavioral signals.</p>
                  <p><strong>Location-intelligent creative.</strong> Each ad included location-aware elements — "Which Lumen is closest to you?" — with dynamic variants that highlighted each clinic's unique character. The North Austin location leaned into a neighborhood feel; the South Austin location emphasized the flagship experience. One campaign, two distinct identities.</p>
                  <p><strong>Shared new patient offer.</strong> We created a "New Patient Intro Facial" at $99 that ran across both locations simultaneously. One offer, consistent positioning, maximum ad spend efficiency. The offer was designed to generate first visits and begin the patient relationship — not to produce one-time discount patients.</p>
                  <p><strong>Centralized intake + smart routing.</strong> Our sales team handled inbound from both locations through a shared CRM. When a lead came in, they were routed to the nearest available slot across either clinic — filling gaps at the newer location without requiring any manual effort from the in-house team.</p>
                  <p><strong>Location-level reporting.</strong> Dr. Shah received a weekly dashboard showing cost per patient, show rate, and revenue attributed to ads — broken down by location. For the first time, she could see exactly what each dollar of ad spend was producing at each clinic.</p>

                  <PagePull
                    quote="We went from 15 consults a month to over <em>80 in the first quarter.</em> They actually understand medspa unit economics."
                    cite="— Dr. Priya Shah, Owner, Lumen Aesthetic Studio"
                  />

                  <h3>The <em>results</em></h3>
                  <p>Within 6 months, combined monthly booked revenue across both locations had grown 317%. The newer location reached parity with the original within 4 months — and by month 6 was outperforming it on a per-appointment-slot basis. Total consults grew from ~15/month to over 80/month across both locations.</p>

                  <PageMetrics items={[
                    { val: '+317<em>%</em>', label: 'Monthly booked revenue (6 mo.)' },
                    { val: '80<em>+</em>', label: 'Combined consults/month' },
                    { val: '4<em>mo</em>', label: 'Location 2 reached parity' },
                    { val: '2.9<em>×</em>', label: 'Lower cost per patient vs. prior efforts' },
                  ]} />

                  <p>The unified system also created a compounding effect: patient data, audience signals, and creative learnings from both locations fed a shared asset library. By month 6, cost per lead had dropped 34% from month 1 as the algorithm optimized against a much richer data set.</p>

                </div>
                <PageSidebar
                  heading="Running <em>multiple</em> locations?"
                  body="Multi-location medspa growth requires a different system than a single clinic. We've built it. Let's talk."
                />
              </div>
            </div>
          </section>

          <PageRelated
            heading="More medspa transformations."
            items={[
              { href: 'case-study-glow-co.html', eyebrow: 'Scottsdale, AZ · Solo owner', title: 'Glow &amp; <em>Co.</em> Aesthetics', stat: '8.4<em>×</em>', meta: 'Return on ad spend in 90 days' },
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

  ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyLumen />);
})();
