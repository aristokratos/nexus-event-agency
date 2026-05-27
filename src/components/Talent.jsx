import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { TALENTS } from '../data'

const CATS = ['All','High Fashion','Commercial','Editorial','Runway','Media Talent','Ushering']

function TalentModal({ talent, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-img">
          <img src={talent.image} alt={talent.name} />
        </div>
        <div className="modal-details">
          <span className="lbl" style={{ fontSize:9 }}>{talent.category}</span>
          <h3 className="heading-sm mt-8 mb-16" style={{ color:'var(--white)' }}>{talent.name}</h3>
          <div className={`body-sm mb-24 ${talent.status === 'Available' ? 'status-available' : 'status-booked'}`}>
            <span className="status-dot" />
            {talent.status}
          </div>

          {[
            ['Location', talent.location],
            ['Experience', talent.experience],
            ['Height', talent.height],
            ['Bust / Chest', talent.bust + '"'],
            ['Waist', talent.waist + '"'],
            ['Hips', talent.hips + '"'],
          ].map(([label, value]) => (
            <div key={label} className="modal-stat">
              <span className="modal-stat-label">{label}</span>
              <span className="modal-stat-value">{value}</span>
            </div>
          ))}

          <div style={{ marginTop:24 }}>
            <span className="lbl" style={{ fontSize:9, display:'block', marginBottom:12 }}>Skills</span>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {talent.skills.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>

          <div style={{ marginTop:32 }}>
            <a href="#book" className="btn btn-solid btn-sm" style={{ width:'100%', justifyContent:'center' }}>
              Book {talent.name.split(' ')[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Talent() {
  useReveal()
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? TALENTS : TALENTS.filter(t => t.category === active)

  return (
    <section id="talent" className="section-pad" style={{ background:'var(--dark)' }}>
      <div className="container">
        <div className="text-center mb-48 reveal">
          <span className="lbl">Who We Represent</span>
          <h2 className="heading-lg mt-16 mb-16">Talent Roster</h2>
          <p className="body-text" style={{ maxWidth:520, margin:'0 auto' }}>
            A curated network of elite Nigerian talent — models, media personalities, and hospitality professionals.
          </p>
        </div>

        <div className="talent-filters">
          {CATS.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="talent-grid">
          {filtered.map((t, i) => (
            <div
              key={t.id}
              className="talent-card reveal"
              style={{ transitionDelay:`${(i%4)*0.1}s` }}
              onClick={() => setSelected(t)}
            >
              <img src={t.image} alt={t.name} loading="lazy" />
              <div className="talent-card-overlay" />
              <div className="talent-card-top">
                <span className={`body-sm ${t.status === 'Available' ? 'status-available' : 'status-booked'}`}>
                  <span className="status-dot" />{t.status}
                </span>
              </div>
              <div className="talent-card-info">
                <p style={{ fontSize:9, letterSpacing:'2px', textTransform:'uppercase', color:'var(--gold)', marginBottom:4 }}>{t.category}</p>
                <p style={{ fontSize:14, fontWeight:600, color:'var(--white)' }}>{t.name}</p>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{t.location} · {t.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-48 reveal">
          <p className="body-sm mb-24">Representing 120+ talents across Lagos and Ibadan</p>
          <a href="#book" className="btn btn-outline">Request Full Roster</a>
        </div>
      </div>

      {selected && <TalentModal talent={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
