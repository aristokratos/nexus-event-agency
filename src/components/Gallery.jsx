import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { GALLERY } from '../data'

export default function Gallery() {
  useReveal()
  const [lightbox, setLightbox] = useState(null)

  const close = () => setLightbox(null)
  const prev = () => setLightbox(i => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setLightbox(i => (i + 1) % GALLERY.length)

  return (
    <section id="gallery" className="section-pad-sm">
      <div className="container">
        <div className="text-center mb-48 reveal">
          <span className="lbl">Visual Archive</span>
          <h2 className="heading-lg mt-16">Gallery</h2>
        </div>
      </div>

      <div className="gallery-grid">
        {GALLERY.map((item, i) => (
          <div
            key={item.id}
            className={`gallery-item reveal-scale ${item.span ? 'span-2' : ''}`}
            style={{ transitionDelay:`${i*0.07}s` }}
            onClick={() => setLightbox(i)}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <div className="gallery-item-overlay">
              <div>
                <p style={{ fontSize:8, letterSpacing:'2px', textTransform:'uppercase', color:'var(--gold)', marginBottom:4 }}>{item.cat}</p>
                <p className="gallery-item-label">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close}>✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); prev() }}>‹</button>
          <img
            src={GALLERY[lightbox].src}
            alt={GALLERY[lightbox].title}
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); next() }}>›</button>
        </div>
      )}
    </section>
  )
}
