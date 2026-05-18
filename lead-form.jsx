// Ignited Spa — Lead capture
const { useState: useStateLF, useEffect: useEffectLF, useRef: useRefLF } = React;

const STORAGE_KEY = 'ignited_spa_leads';

function saveLead(lead) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push({ ...lead, ts: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {}
}

function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validPhone(p) { return p.replace(/\D/g,'').length >= 10; }

const REV_RANGES = ['Under $30k / mo', '$30k – $75k / mo', '$75k – $200k / mo', '$200k+ / mo'];
const SPEND_RANGES = ['Not running ads yet', 'Under $2k / mo', '$2k – $10k / mo', '$10k+ / mo'];
const GOALS = ['More new patients', 'Fill underbooked days', 'Launch a new treatment', 'Scale to more locations'];

function LeadForm({ variant = 'inline', onDone }) {
  const [step, setStep] = useStateLF(0);
  const [data, setData] = useStateLF({
    name: '', email: '', phone: '',
    spa: '', city: '', revenue: '',
    spend: '', goal: '', notes: ''
  });
  const [err, setErr] = useStateLF('');
  const [done, setDone] = useStateLF(false);

  const set = (k, v) => setData(d => ({...d, [k]: v}));

  const next = () => {
    setErr('');
    if (step === 0) {
      if (!data.name.trim()) return setErr('Tell us your name.');
      if (!validEmail(data.email)) return setErr('A valid email keeps you in the loop.');
      if (!validPhone(data.phone)) return setErr('We use phone for the strategy call only.');
    }
    if (step === 1) {
      if (!data.spa.trim()) return setErr('Your spa name helps us prep the audit.');
      if (!data.city.trim()) return setErr('City helps us check market fit.');
      if (!data.revenue) return setErr('Pick a range — it stays confidential.');
    }
    if (step === 2) {
      if (!data.spend) return setErr('Pick your current ad spend range.');
      if (!data.goal) return setErr('Pick your primary goal.');
      // submit
      saveLead(data);
      setDone(true);
      onDone?.();
      return;
    }
    setStep(s => s + 1);
  };

  const back = () => { setErr(''); setStep(s => Math.max(0, s - 1)); };

  if (done) {
    return (
      <div className={"lead-form lead-" + variant + " lead-done"}>
        <div className="lead-success">
          <div className="success-mark">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3 className="serif"><em>You're on the list.</em></h3>
          <p>A strategist will reach out within 24 hours to schedule your audit. Check <strong>{data.email}</strong> for a confirmation.</p>
          <div className="success-meta">
            <span>· Free, no contract</span>
            <span>· 20-min call</span>
            <span>· Medspa-only</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"lead-form lead-" + variant}>
      <div className="lead-progress">
        {[0,1,2].map(i => (
          <div key={i} className={"lead-dot " + (step >= i ? 'on' : '') + (step === i ? ' active' : '')}>
            <span>{i+1}</span>
          </div>
        ))}
        <div className="lead-progress-line"><div className="lead-progress-fill" style={{width: `${((step)/2)*100}%`}}></div></div>
      </div>

      <div className="lead-step-label">
        Step {step + 1} of 3 — {['About you', 'About your spa', 'About your growth'][step]}
      </div>

      {step === 0 && (
        <div className="lead-fields">
          <Field label="Your name" v={data.name} onChange={v=>set('name',v)} placeholder="Jane Doe" />
          <Field label="Email" v={data.email} onChange={v=>set('email',v)} placeholder="you@yourmedspa.com" type="email" />
          <Field label="Phone" v={data.phone} onChange={v=>set('phone',v)} placeholder="(555) 123-4567" type="tel" />
        </div>
      )}

      {step === 1 && (
        <div className="lead-fields">
          <Field label="Medspa name" v={data.spa} onChange={v=>set('spa',v)} placeholder="Glow & Co. Aesthetics" />
          <Field label="City / state" v={data.city} onChange={v=>set('city',v)} placeholder="Scottsdale, AZ" />
          <Choice label="Monthly revenue (confidential)" options={REV_RANGES} value={data.revenue} onChange={v=>set('revenue',v)} />
        </div>
      )}

      {step === 2 && (
        <div className="lead-fields">
          <Choice label="Current ad spend" options={SPEND_RANGES} value={data.spend} onChange={v=>set('spend',v)} />
          <Choice label="Primary goal for the next 90 days" options={GOALS} value={data.goal} onChange={v=>set('goal',v)} />
          <Field label="Anything else? (optional)" v={data.notes} onChange={v=>set('notes',v)} placeholder="Launching a new injector, opening 2nd location, etc." textarea />
        </div>
      )}

      {err && <div className="lead-error">{err}</div>}

      <div className="lead-actions">
        {step > 0 && <button type="button" className="lead-back" onClick={back}>← Back</button>}
        <button type="button" className="lead-next" onClick={next}>
          {step === 2 ? 'Submit & get my audit' : 'Continue'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="lead-trust">
        🔒 Your info stays with us. No spam, no sharing — ever.
      </div>
    </div>
  );
}

function Field({ label, v, onChange, placeholder, type='text', textarea }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {textarea
        ? <textarea value={v} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={3} />
        : <input type={type} value={v} onChange={e=>onChange(e.target.value)} placeholder={placeholder} />}
    </label>
  );
}

function Choice({ label, options, value, onChange }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      <div className="choice-grid">
        {options.map(o => (
          <button key={o} type="button" className={"choice " + (value === o ? 'sel' : '')} onClick={()=>onChange(o)}>
            <span className="choice-radio"></span>
            <span>{o}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== FLOATING PILL + MODAL ==============
function LeadPill() {
  const [open, setOpen] = useStateLF(false);
  const [show, setShow] = useStateLF(false);

  useEffectLF(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectLF(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffectLF(() => {
    const handler = () => setOpen(true);
    document.querySelectorAll('a[href="#contact"], a.btn-primary').forEach(a => {
      if (a.dataset.leadHook) return;
      a.dataset.leadHook = '1';
      a.addEventListener('click', (e) => {
        // Let inline form anchor still work; only intercept if NOT inside the form section
        const inForm = a.closest('.cta-section');
        if (inForm) return;
        e.preventDefault();
        setOpen(true);
      });
    });
    return () => {};
  }, []);

  return (
    <>
      <button className={"lead-pill " + (show ? 'show' : '') + (open ? ' hidden' : '')} onClick={() => setOpen(true)}>
        <span className="lead-pill-dot"></span>
        <span>Free 20-min audit</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>

      {open && (
        <div className="lead-modal-bg" onClick={(e) => { if (e.target.classList.contains('lead-modal-bg')) setOpen(false); }}>
          <div className="lead-modal">
            <button className="lead-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="lead-modal-head">
              <span className="eyebrow"><span className="pulse"></span>$1,000 ad spend on us</span>
              <h3 className="serif">Let's see what's <em>actually possible</em> for your spa.</h3>
              <p>20 minutes. We audit your funnel, ads, and offers. If we're a fit, we cover your first $1,000 in ad spend and our sales team books the appointments for you.</p>
            </div>
            <LeadForm variant="modal" />
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { LeadForm, LeadPill });
