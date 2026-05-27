import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'CEO, Bloom Ventures',
    event: 'Annual Corporate Gala',
    text: 'Nexus transformed our annual gala into something truly spectacular. The attention to detail was impeccable — from the bespoke floral arrangements to the seamless AV production. Our guests are still talking about it months later.',
  },
  {
    name: 'Emeka & Chisom Uzoma',
    role: 'Clients',
    event: 'Wedding Reception',
    text: 'We handed Nexus our dream and they delivered beyond it. Every moment of our wedding was perfectly orchestrated. The team was professional, responsive, and incredibly warm throughout the entire journey.',
  },
  {
    name: 'Femi Adesanya',
    role: 'Marketing Director, GTBank',
    event: 'Fashion Week Activation',
    text: 'Working with Nexus on our fashion week brand activation was a game-changer. They understood our brand language from day one and executed a campaign that exceeded every KPI we set. Outstanding work.',
  },
  {
    name: 'Dr. Ngozi Bello',
    role: 'Chair, Arise Foundation',
    event: 'Charity Gala',
    text: 'Our annual charity gala raised 40% more than the previous year, and a large part of that was the incredible atmosphere Nexus created. They made our cause feel as prestigious as it deserves to be.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const t = testimonials[index]

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
        </div>

        <div className="relative border border-[#c9a227]/15 bg-[#0d0d0d] p-10 md:p-14">
          <Quote
            size={48}
            className="text-[#c9a227]/20 absolute top-8 left-8"
            fill="currentColor"
          />

          <div className="relative z-10">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 italic">
              "{t.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold text-lg uppercase border border-[#c9a227]/30">
                {t.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
                <p className="text-[#c9a227] text-xs tracking-wide uppercase mt-0.5">{t.event}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-px transition-all duration-300 ${
                  i === index ? 'w-8 bg-[#c9a227]' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c9a227] hover:text-[#c9a227] transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c9a227] hover:text-[#c9a227] transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
