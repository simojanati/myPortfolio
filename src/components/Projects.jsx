import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="section-pad"
      style={{ padding: '100px 4rem', position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

      <div style={{ marginBottom: 60 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>{t.projLabel}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800 }}>{t.projTitle}</h2>
        <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: 2, marginTop: 16 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {t.projects.map((p, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            style={{ background: 'var(--bg2)', borderRadius: 20, padding: 32, border: `1px solid ${hovered === i ? p.color + '40' : 'var(--border)'}`, transition: 'all 0.3s ease', transform: hovered === i ? 'translateY(-6px)' : 'none', boxShadow: hovered === i ? `0 20px 60px ${p.color}15` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{p.emoji}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {p.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 20, background: `${p.color}10`, border: `1px solid ${p.color}25`, color: p.color, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
            <h3 style={{ fontFamily: 'Syne', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {p.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                  <span style={{ color: 'var(--muted)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>{t.projPeriod}</span>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, fontSize: 14, background: hovered === i ? `${p.color}15` : 'transparent' }}>↗</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
