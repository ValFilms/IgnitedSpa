// Ignited Spa — App
const { useEffect, useRef } = React;

function App() {
  const root = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={root}>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Cases />
      <Services />
      <Process />
      <Offer />
      <Reviews />
      <CTA />
      <Footer />
      <LeadPill />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
