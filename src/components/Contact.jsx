import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="section-pad"
      style={{ padding: '100px 4rem', position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
      <div className="contact-box" style={{ background: 'var(--bg2)', borderRadius: 24, padding: 64, border: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,231,183,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: 16 }}>{t.contactLabel}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
          {t.contactTitle}<br />
          <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.contactTitleAccent}</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>{t.contactDesc}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="mailto:simojanati92@gmail.com"
            style={{ padding: '16px 36px', borderRadius: 10, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: '#000', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(110,231,183,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >simojanati92@gmail.com</a>
          <a href="tel:+212700890277"
            style={{ padding: '16px 36px', borderRadius: 10, border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 500, fontSize: 15, textDecoration: 'none', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >+212 700 890 277</a>
        </div>
        <div style={{ marginTop: 40, color: 'var(--muted)', fontSize: 13 }}>📍 Rabat, Morocco</div>
      </div>
    </section>
  )
}
