import NexusLogo from './NexusLogo'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div>
            <a href="#top" className="nav-logo" style={{ marginBottom:20, display:'inline-flex' }}>
              <NexusLogo />
              <div className="nav-logo-text" style={{ marginLeft:12 }}>
                <span className="nav-logo-name">NEXUS</span>
                <span className="nav-logo-sub">Event Agency</span>
              </div>
            </a>
            <p className="body-sm" style={{ maxWidth:280, marginTop:16 }}>
              Premium talent architecture and event management across Lagos and Ibadan, Nigeria.
            </p>
            <div className="social-links" style={{ marginTop:28 }}>
              {['IG','TW','FB','LI'].map(s => <a key={s} href="#" className="social-link">{s}</a>)}
            </div>
          </div>

          <div>
            <p className="footer-col-title">Services</p>
            {['Premium Ushering','Fashion Modeling','Media Talent','Brand Activations','Corporate Partnerships','Production Coordination'].map(l => (
              <a key={l} href="#services" className="footer-link">{l}</a>
            ))}
          </div>

          <div>
            <p className="footer-col-title">Agency</p>
            {['About Us','Talent Roster','Editorial','Gallery','Testimonials','Careers'].map(l => (
              <a key={l} href="#about" className="footer-link">{l}</a>
            ))}
          </div>

          <div>
            <p className="footer-col-title">Contact</p>
            <p className="footer-link" style={{ cursor:'default' }}>14B Ozumba Mbadiwe Ave</p>
            <p className="footer-link" style={{ cursor:'default' }}>Victoria Island, Lagos</p>
            <p className="footer-link" style={{ cursor:'default' }}>+234 706 198 1497</p>
            <p className="footer-link" style={{ cursor:'default' }}>Powersimeon@gmail.com</p>
            <a href="#book" className="btn btn-outline btn-sm" style={{ marginTop:20 }}>Book Talent</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">© {new Date().getFullYear()} Nexus Event Agency. All rights reserved.</p>
          <div style={{ display:'flex', gap:24 }}>
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(l => (
              <a key={l} href="#" className="footer-legal" style={{ transition:'color 0.3s' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
