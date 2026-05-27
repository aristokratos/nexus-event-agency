import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Address', value: '14B Ozumba Mbadiwe Ave, Victoria Island, Lagos' },
  { icon: Phone, label: 'Phone', value: '+234 (0) 801 234 5678' },
  { icon: Mail, label: 'Email', value: 'hello@nexuseventagency.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', event: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your event and we'll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-[#c9a227]/15">
          {/* Left panel */}
          <div className="lg:col-span-2 bg-[#c9a227] p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-black text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-black/70 text-sm mb-10">
                Reach out directly or fill in the form and we'll come to you.
              </p>

              <ul className="space-y-8">
                {info.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-black" />
                    </div>
                    <div>
                      <p className="text-black/60 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-black font-medium text-sm">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <p className="text-black/60 text-xs uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {['IG', 'TW', 'FB', 'LI'].map((s) => (
                  <div
                    key={s}
                    className="w-9 h-9 bg-black/15 flex items-center justify-center text-black text-xs font-bold hover:bg-black/25 cursor-pointer transition-colors"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-[#0d0d0d] p-10">
            {submitted ? (
              <div className="h-full flex items-center justify-center flex-col text-center py-16">
                <div className="w-16 h-16 border-2 border-[#c9a227] flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#c9a227]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. A member of our team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#c9a227] text-white placeholder-gray-600 py-3 outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#c9a227] text-white placeholder-gray-600 py-3 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                    Event Type
                  </label>
                  <select
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    className="w-full bg-[#0d0d0d] border-b border-white/10 focus:border-[#c9a227] text-white py-3 outline-none text-sm transition-colors"
                  >
                    <option value="" className="bg-[#0d0d0d]">Select event type</option>
                    <option value="corporate" className="bg-[#0d0d0d]">Corporate Event</option>
                    <option value="wedding" className="bg-[#0d0d0d]">Wedding</option>
                    <option value="concert" className="bg-[#0d0d0d]">Concert / Show</option>
                    <option value="private" className="bg-[#0d0d0d]">Private Event</option>
                    <option value="activation" className="bg-[#0d0d0d]">Brand Activation</option>
                    <option value="other" className="bg-[#0d0d0d]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your event, expected date, guest count, and any special requirements..."
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#c9a227] text-white placeholder-gray-600 py-3 outline-none text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#f0d060] transition-all duration-300 mt-4"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
