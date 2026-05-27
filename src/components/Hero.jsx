import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,162,39,0.06)_0%,_transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#c9a227]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
          Premium Event Management
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          <span className="block text-white">Crafting</span>
          <span className="block italic font-light text-[#c9a227]">
            Unforgettable
          </span>
          <span className="block text-white">Experiences</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From intimate gatherings to grand galas, Nexus Event Agency transforms
          your vision into extraordinary moments that last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-black font-semibold tracking-wide uppercase text-sm hover:bg-[#f0d060] transition-all duration-300"
          >
            Plan Your Event
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-wide uppercase hover:border-[#c9a227] hover:text-[#c9a227] transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-12 text-center">
          {[
            { num: '500+', label: 'Events Delivered' },
            { num: '12+', label: 'Years Experience' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#c9a227]">{num}</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#c9a227] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
