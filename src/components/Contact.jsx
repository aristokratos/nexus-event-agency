import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const INFO = [
  { icon:'📍', label:'Address', value:'14B Ozumba Mbadiwe Ave, Victoria Island, Lagos' },
  { icon:'📞', label:'Phone / WhatsApp', value:'+234 706 198 1497' },
  { icon:'✉', label:'Email', value:'Powersimeon@gmail.com' },
  { icon:'⏰', label:'Hours', value:'Mon – Fri: 8:00am – 6:00pm WAT' },
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="section-pad" style={{ background:'var(--dark)' }}>
      <div className="container">
        <div className="text-center mb-48 reveal">
          <span className="lbl">Get In Touch</span>
          <h2 className="heading-lg mt-16 mb-16">Contact Us</h2>
          <p className="body-text" style={{ maxWidth:520, margin:'0 auto' }}>
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal-l">
            <span className="gold-rule" />
            <h3 className="heading-sm mb-32" style={{ color:'var(--white)' }}>Reach Out Directly</h3>
            {INFO.map(item => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <p style={{ fontSize:9, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--gray2)', marginBottom:6 }}>{item.label}</p>
                  <p style={{ fontSize:14, fontWeight:300, color:'var(--white)' }}>{item.value}</p>
                </div>
              </div>
            ))}
            <div className="social-links">
              {['IG','TW','FB','LI','YT'].map(s => (
                <a key={s} href="#" className="social-link">{s}</a>
              ))}
            </div>
          </div>

          <div className="reveal-r">
            {sent ? (
              <div style={{ textAlign:'center', paddingTop:60 }}>
                <div style={{ fontSize:40, color:'var(--gold)', marginBottom:24 }}>◆</div>
                <h3 className="heading-sm mb-16" style={{ color:'var(--white)' }}>Message Sent</h3>
                <p className="body-text">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input name="name" required value={form.name} onChange={onChange} placeholder="Your name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input name="subject" value={form.subject} onChange={onChange} placeholder="What is this about?" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea name="message" required value={form.message} onChange={onChange} rows={5} placeholder="Tell us more..." className="form-textarea" />
                  </div>
                  <button type="submit" className="btn btn-solid">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
