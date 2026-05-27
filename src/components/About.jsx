import { CheckCircle } from 'lucide-react'

const pillars = [
  'Meticulous planning from concept to close',
  'Dedicated on-site coordination team',
  'Trusted vendor network across West Africa',
  'Transparent pricing — no hidden costs',
  'Post-event analysis and reporting',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — visual */}
        <div className="relative">
          <div className="relative h-[480px] bg-gradient-to-br from-[#1a1206] to-[#080808] border border-[#c9a227]/20 overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#c9a227]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#c9a227]" />

            {/* Inner content */}
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-6 p-10">
              <div className="text-center">
                <p className="text-[#c9a227] text-7xl font-bold">12</p>
                <p className="text-gray-400 tracking-widest uppercase text-sm mt-1">Years in Business</p>
              </div>
              <div className="w-px h-16 bg-[#c9a227]/30" />
              <div className="text-center">
                <p className="text-[#c9a227] text-7xl font-bold">500<span className="text-4xl">+</span></p>
                <p className="text-gray-400 tracking-widest uppercase text-sm mt-1">Events Executed</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-[#c9a227] text-black px-4 py-3 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider leading-tight">
                Award<br />Winning<br />Agency
              </p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div>
          <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Passion Meets <span className="text-[#c9a227]">Precision</span>
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Founded in 2013, Nexus Event Agency was born from a simple belief: every event
            deserves to be extraordinary. Based in Lagos with reach across West Africa, we
            bring together creative vision and operational excellence to deliver moments that
            move people.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our team of seasoned planners, designers, and coordinators have curated hundreds
            of events — from intimate boardroom dinners to stadium-scale concerts — always
            with the same dedication to detail that defines us.
          </p>

          <ul className="space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#c9a227] mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-4 border border-[#c9a227] text-[#c9a227] text-sm tracking-wide uppercase hover:bg-[#c9a227] hover:text-black transition-all duration-300"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  )
}
