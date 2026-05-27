import { Music, Briefcase, Heart, Star, Camera, Users } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Events',
    desc: 'Conferences, product launches, team retreats, and award galas — we handle every detail so you can focus on your business.',
  },
  {
    icon: Heart,
    title: 'Weddings & Celebrations',
    desc: 'Your dream day, flawlessly executed. From intimate ceremonies to lavish receptions across Nigeria and beyond.',
  },
  {
    icon: Music,
    title: 'Concerts & Shows',
    desc: 'Full-scale production management for live performances, festivals, and entertainment experiences.',
  },
  {
    icon: Star,
    title: 'VIP & Private Events',
    desc: 'Exclusive private dinners, milestone celebrations, and bespoke events crafted for the discerning few.',
  },
  {
    icon: Camera,
    title: 'Brand Activations',
    desc: 'Immersive brand experiences, pop-ups, and experiential marketing campaigns that captivate audiences.',
  },
  {
    icon: Users,
    title: 'Social Gatherings',
    desc: 'Birthday parties, reunions, charity galas, and social occasions designed to bring people together beautifully.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.04)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end event management tailored to your vision, budget, and guest experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c9a227]/10">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#c9a227] group-hover:w-full transition-all duration-500" />
              <div className="mb-5">
                <div className="w-12 h-12 border border-[#c9a227]/30 flex items-center justify-center group-hover:border-[#c9a227] transition-colors duration-300">
                  <Icon size={22} className="text-[#c9a227]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
