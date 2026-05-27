import { useReveal } from '../hooks/useReveal'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  useReveal()
  return (
    <section id="testimonials" className="section-pad" style={{ background:'var(--dark)' }}>
      <div className="container">
        <div className="text-center mb-48 reveal">
          <span className="lbl">Client Stories</span>
          <h2 className="heading-lg mt-16">What Our Clients Say</h2>
        </div>

        <div className="testimonial-track">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-title">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
