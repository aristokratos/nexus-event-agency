import { useReveal } from '../hooks/useReveal'

const PILLARS = [
  { icon:"◆", title:"Absolute Elegance", desc:"Every talent we deploy embodies the highest standards of personal presentation, grooming, and visual appeal." },
  { icon:"◆", title:"Professional Discipline", desc:"Strict punctuality, briefing adherence, and on-set professionalism are non-negotiable cornerstones of our agency." },
  { icon:"◆", title:"Flawless Coordination", desc:"From call sheets to wardrobe logistics, our operational team ensures seamless execution from brief to wrap." },
]

export default function About() {
  useReveal()
  return (
    <section id="about" className="section-pad" style={{ background:'var(--dark)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Images */}
          <div className="about-images reveal-l">
            <img
              className="about-img-main"
              src="https://images.unsplash.com/photo-1652095319417-4bf8a0de1a3d?w=700&q=80"
              alt="Editorial fashion"
            />
            <img
              className="about-img-accent"
              src="https://images.unsplash.com/photo-1595882669314-919b3d51f2c7?w=500&q=80"
              alt="Professional model"
            />
            <div className="about-gold-tag">Est. Lagos, Nigeria</div>
          </div>

          {/* Copy */}
          <div className="about-copy reveal-r">
            <span className="gold-rule" />
            <span className="lbl">The Agency</span>
            <h2 className="heading-lg mt-16 mb-24">
              Premium Talent<br />
              <em style={{ fontStyle:'italic', color:'var(--gold)' }}>Architecture</em>
            </h2>
            <p className="body-text mb-24">
              Nexus Event Agency is a premier talent architecture and event management firm dedicated to bridging the gap between top-tier corporate operations, high-fashion creative directions, premium commercial broadcasts, and exceptional event delivery.
            </p>
            <p className="body-text">
              Our agency curates, trains, and deploys high-caliber professionals specialized in high-fashion and commercial modeling, media appearances, and premium executive ushering across Lagos and Ibadan.
            </p>
            <div className="about-philosophy mt-32">
              <p className="body-text" style={{ fontStyle:'italic' }}>
                "In today's highly visual and competitive market, the human element represents the primary bridge between a brand and its audience. Nexus provides a unified standard of absolute elegance, strict professional discipline, and flawless operational coordination."
              </p>
            </div>
            <div style={{ display:'flex', gap:12, marginTop:36, flexWrap:'wrap' }}>
              <a href="#services" className="btn btn-solid">Our Services</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div style={{ marginTop:100 }}>
          <div className="text-center mb-48 reveal">
            <span className="lbl">What We Stand For</span>
            <h2 className="heading-md mt-16">Three Pillars of Excellence</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'var(--border)' }}>
            {PILLARS.map((p, i) => (
              <div key={i} className="service-card reveal" style={{ transitionDelay:`${i*0.15}s` }}>
                <div style={{ fontSize:24, color:'var(--gold)', marginBottom:20 }}>{p.icon}</div>
                <h3 className="heading-sm mb-16" style={{ color:'var(--white)' }}>{p.title}</h3>
                <p className="body-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
