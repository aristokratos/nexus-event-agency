const columns = [
  {
    title: 'Services',
    links: ['Corporate Events', 'Weddings', 'Concerts & Shows', 'Brand Activations', 'Private Events'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Portfolio', 'Careers', 'Press'],
  },
  {
    title: 'Contact',
    links: [
      'hello@nexuseventagency.com',
      '+234 (0) 801 234 5678',
      'Victoria Island, Lagos',
      'Mon – Fri: 8am – 6pm',
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#c9a227]/10 bg-[#040404] px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-widest uppercase mb-4">
              <span className="text-[#c9a227]">Nexus</span>
              <span className="text-white"> Event</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium event management crafting extraordinary experiences across Nigeria and West Africa.
            </p>
            <div className="flex gap-3 mt-6">
              {['IG', 'TW', 'FB', 'LI'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-gray-500 text-xs hover:border-[#c9a227] hover:text-[#c9a227] cursor-pointer transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-[#c9a227] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Nexus Event Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
