import { useReveal } from '../hooks/useReveal'
import { SERVICES, STAFFING_RATIOS } from '../data'

export default function Services() {
  useReveal()
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <div className="text-center mb-48 reveal">
          <span className="lbl">What We Do</span>
          <h2 className="heading-lg mt-16 mb-16">Our Services</h2>
          <p className="body-text" style={{ maxWidth:560, margin:'0 auto' }}>
            End-to-end talent management and event staffing tailored to your vision, brand, and guest experience.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="service-card reveal" style={{ transitionDelay:`${(i%3)*0.1}s` }}>
              <div className="service-num">{s.num}</div>
              <span className="lbl" style={{ fontSize:9, letterSpacing:'3px', marginBottom:12, display:'block' }}>{s.label}</span>
              <h3 className="heading-sm mb-16" style={{ color:'var(--white)' }}>{s.title}</h3>
              <p className="body-sm">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Staffing ratios */}
        <div style={{ marginTop:80 }} className="reveal">
          <div className="divider-luxury"><div className="l"/><div className="d"/><div className="r"/></div>
          <div className="text-center mb-32">
            <span className="lbl">Ushering Intelligence</span>
            <h3 className="heading-md mt-16">Staffing Ratio Guide</h3>
          </div>
          <table className="staffing-table">
            <thead>
              <tr>
                <th>Event Type</th>
                <th>Recommended Ratio</th>
                <th>Operational Focus</th>
              </tr>
            </thead>
            <tbody>
              {STAFFING_RATIOS.map((r, i) => (
                <tr key={i}>
                  <td style={{ color:'var(--white)', fontWeight:400 }}>{r.event}</td>
                  <td style={{ color:'var(--gold)' }}>{r.ratio}</td>
                  <td>{r.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
