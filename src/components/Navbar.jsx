import { useState, useEffect } from 'react'
import NexusLogo from './NexusLogo'

const LINKS = ['About','Services','Talent','Gallery','Book','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#top" className="nav-logo">
          <NexusLogo />
          <div className="nav-logo-text">
            <span className="nav-logo-name">NEXUS</span>
            <span className="nav-logo-sub">Event Agency</span>
          </div>
        </a>
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div className="nav-cta-wrap">
          <a href="#book" className="btn btn-outline btn-sm">Book Talent</a>
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        <a href="#top" className="nav-logo" style={{marginBottom:8}} onClick={() => setMobileOpen(false)}>
          <NexusLogo size={28}/>
          <div className="nav-logo-text">
            <span className="nav-logo-name">NEXUS</span>
            <span className="nav-logo-sub">Event Agency</span>
          </div>
        </a>
        {LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="mobile-link" onClick={() => setMobileOpen(false)}>{l}</a>
        ))}
        <a href="#book" className="btn btn-outline" onClick={() => setMobileOpen(false)}>Book Talent</a>
      </div>
    </>
  )
}
