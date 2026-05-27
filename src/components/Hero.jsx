export default function Hero() {
  return (
    <section id="top" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618998584360-10a0c28eec0f?w=1920&q=80')" }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow anim-1">
          <span className="hero-eyebrow-line" />
          <span className="lbl">Lagos · Ibadan · Nigeria</span>
        </div>
        <h1 className="heading-xl hero-title anim-2">
          Where Luxury Talent<br />
          Meets <em>Elite</em> Execution
        </h1>
        <p className="hero-sub anim-3">
          A premier talent architecture and event management firm bridging high-fashion, media, luxury hospitality, and corporate excellence across Nigeria.
        </p>
        <div className="hero-ctas anim-4">
          <a href="#talent" className="btn btn-solid">View Talent Roster</a>
          <a href="#book" className="btn btn-outline">Book Talent Now</a>
          <a href="#services" className="btn btn-ghost">Our Services</a>
        </div>
      </div>
      <div className="hero-scroll anim-5">
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
