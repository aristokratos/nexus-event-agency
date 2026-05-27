import { useState } from 'react'

const TABS = ['Book a Model', 'Book Ushers', 'Full Event Staffing']

export default function Booking() {
  const [tab, setTab] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', date:'', guests:'', type:'', budget:'', brief:'' })

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = async e => {
    e.preventDefault()
    const data = new FormData()
    data.append('form-name', 'booking')
    data.append('booking-type', TABS[tab])
    Object.entries(form).forEach(([k, v]) => data.append(k, v))
    try { await fetch('/', { method: 'POST', body: data }) } catch {}
    setSubmitted(true)
  }

  return (
    <section id="book" className="section-pad">
      <div className="container">
        <div className="text-center mb-48">
          <span className="lbl">Make a Booking</span>
          <h2 className="heading-lg mt-16 mb-16">Book Nexus Talent</h2>
          <p className="body-text" style={{ maxWidth:520, margin:'0 auto' }}>
            Complete the form below and a member of our team will respond within 4 business hours with a tailored proposal.
          </p>
        </div>

        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <div className="booking-tabs">
            {TABS.map((t, i) => (
              <button key={t} className={`booking-tab ${tab === i ? 'active' : ''}`} onClick={() => setTab(i)}>{t}</button>
            ))}
          </div>

          {submitted ? (
            <div style={{ textAlign:'center', padding:'80px 0' }}>
              <div style={{ fontSize:48, color:'var(--gold)', marginBottom:24 }}>◆</div>
              <h3 className="heading-sm mb-16" style={{ color:'var(--white)' }}>Booking Request Received</h3>
              <p className="body-text">Our talent team will be in touch within 4 business hours with a tailored proposal.</p>
              <button className="btn btn-outline mt-32" onClick={() => setSubmitted(false)}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input name="name" required value={form.name} onChange={onChange} placeholder="Your full name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Brand</label>
                  <input name="company" value={form.company} onChange={onChange} placeholder="Organisation name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@company.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="+234 xxx xxx xxxx" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Event Date *</label>
                  <input name="date" type="date" required value={form.date} onChange={onChange} className="form-input" style={{ colorScheme:'dark' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Expected Guests</label>
                  <select name="guests" value={form.guests} onChange={onChange} className="form-select">
                    <option value="">Select range</option>
                    <option>Under 100</option>
                    <option>100 – 300</option>
                    <option>300 – 1,000</option>
                    <option>1,000 – 5,000</option>
                    <option>5,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Event Type</label>
                  <select name="type" value={form.type} onChange={onChange} className="form-select">
                    <option value="">Select type</option>
                    {tab === 0 && <><option>Editorial / Lookbook</option><option>Music Video</option><option>Commercial / Advert</option><option>Fashion Week</option><option>Brand Activation</option></>}
                    {tab === 1 && <><option>Corporate Gala</option><option>Wedding</option><option>Conference / Summit</option><option>Exhibition</option></>}
                    {tab === 2 && <><option>Full Production</option><option>Annual Corporate Event</option><option>Festival / Concert</option><option>Multi-day Campaign</option></>}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={onChange} className="form-select">
                    <option value="">Select budget</option>
                    <option>Under ₦500k</option>
                    <option>₦500k – ₦1M</option>
                    <option>₦1M – ₦3M</option>
                    <option>₦3M – ₦10M</option>
                    <option>₦10M+</option>
                  </select>
                </div>
                <div className="form-group form-grid-full">
                  <label className="form-label">Project Brief *</label>
                  <textarea name="brief" required value={form.brief} onChange={onChange} rows={5} placeholder="Describe your project, the look and feel you're going for, number of talent needed, specific requirements..." className="form-textarea" />
                </div>
              </div>
              <div style={{ marginTop:40, display:'flex', gap:16, flexWrap:'wrap' }}>
                <button type="submit" className="btn btn-solid">Submit Booking Request</button>
                <p className="body-sm" style={{ alignSelf:'center' }}>Response within 4 business hours</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
