import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

export default function Experience() {
  const [active, setActive] = useState(0)
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => { setActive(0) }, [t])

  const exp = t.experiences[active]

  return (
    <section id="experience" ref={ref} className="section-pad"
      style={{ padding: '100px 4rem', position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

      <div style={{ marginBottom: 60 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>{t.expLabel}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800 }}>{t.expTitle}</h2>
        <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: 2, marginTop: 16 }} />
      </div>

      <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {t.experiences.map((e, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ background: active === i ? 'rgba(110,231,183,0.08)' : 'transparent', border: 'none', borderLeft: `2px solid ${active === i ? 'var(--accent)' : 'var(--border)'}`, padding: '14px 20px', textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s', borderRadius: '0 8px 8px 0' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: active === i ? 'var(--accent)' : 'var(--text)' }}>{e.company.split('—')[0].trim()}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{e.period}</div>
            </button>
          ))}
        </div>

        <div key={`${active}-${t.expLabel}`}
          style={{ background: 'var(--bg2)', borderRadius: 16, padding: 36, border: '1px solid var(--border)', animation: 'slideIn 0.3s ease' }}>
          {exp.highlight && (
            <span style={{ background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.2)', color: 'var(--accent)', fontSize: 11, padding: '4px 12px', borderRadius: 20, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 16 }}>
              {t.currentRole}
            </span>
          )}
          <h3 style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{exp.role}</h3>
          <div style={{ color: 'var(--accent2)', fontSize: 14, marginBottom: 20 }}>{exp.company} · {exp.period}</div>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{exp.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {exp.tags.map(tag => (
              <span key={tag} style={{ padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 500, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: 'var(--accent2)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
