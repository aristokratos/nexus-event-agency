import { useState } from 'react'

const categories = ['All', 'Corporate', 'Wedding', 'Concert', 'Private']

const events = [
  {
    title: 'TechNaija Summit 2024',
    category: 'Corporate',
    location: 'Eko Hotel, Lagos',
    guests: '1,200',
    gradient: 'from-blue-900/60 to-[#080808]',
    accent: '#60a5fa',
  },
  {
    title: 'The Adewale Wedding',
    category: 'Wedding',
    location: 'Transcorp Hilton, Abuja',
    guests: '800',
    gradient: 'from-rose-900/60 to-[#080808]',
    accent: '#fb7185',
  },
  {
    title: 'Afrobeats Live Festival',
    category: 'Concert',
    location: 'Teslim Balogun Stadium, Lagos',
    guests: '15,000',
    gradient: 'from-purple-900/60 to-[#080808]',
    accent: '#a78bfa',
  },
  {
    title: 'Sterling Bank Annual Gala',
    category: 'Corporate',
    location: 'Federal Palace Hotel, Lagos',
    guests: '400',
    gradient: 'from-emerald-900/60 to-[#080808]',
    accent: '#34d399',
  },
  {
    title: 'Okafor 50th Anniversary',
    category: 'Private',
    location: 'Ikoyi, Lagos',
    guests: '200',
    gradient: 'from-amber-900/60 to-[#080808]',
    accent: '#fbbf24',
  },
  {
    title: 'GTBank Fashion Week',
    category: 'Corporate',
    location: 'Victoria Island, Lagos',
    guests: '2,000',
    gradient: 'from-pink-900/60 to-[#080808]',
    accent: '#f472b6',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? events : events.filter((e) => e.category === active)

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Events</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A glimpse into the experiences we've crafted for our clients.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wide uppercase transition-all duration-200 ${
                active === cat
                  ? 'bg-[#c9a227] text-black font-semibold'
                  : 'border border-white/10 text-gray-400 hover:border-[#c9a227]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event) => (
            <div
              key={event.title}
              className="group relative h-64 overflow-hidden border border-white/5 hover:border-[#c9a227]/30 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient}`} />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
                }}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span
                  className="text-xs tracking-widest uppercase mb-2 font-medium"
                  style={{ color: event.accent }}
                >
                  {event.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{event.location}</span>
                  <span>·</span>
                  <span>{event.guests} guests</span>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: event.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
