const ITEMS = [
  "Premium Ushering","High-Fashion Modeling","Commercial Campaigns","Media Talent",
  "Brand Activations","Corporate Protocol","Editorial Lookbooks","Runway Management",
  "Music Video Talent","Event Staffing",
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
