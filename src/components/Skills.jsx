import { useState, useEffect, useRef } from 'react'
import { SKILLS } from '../data'
import { useLang } from '../context/LangContext'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Backend')
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="section-pad"
      style={{ padding: '100px 4rem', position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

      <div style={{ marginBottom: 60 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>{t.skillsLabel}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800 }}>{t.skillsTitle}</h2>
        <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: 2, marginTop: 16 }} />
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
        {Object.keys(SKILLS).map(cat => (
          <button key={cat} onClick={() => setActiveTab(cat)}
            style={{ padding: '10px 24px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: activeTab === cat ? 'none' : '1px solid var(--border)', background: activeTab === cat ? 'linear-gradient(135deg, var(--accent), var(--accent2))' : 'transparent', color: activeTab === cat ? '#000' : 'var(--muted)', transition: 'all 0.2s' }}>
            {cat}
          </button>
        ))}
      </div>

      <div key={activeTab} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {SKILLS[activeTab].map(s => (
          <div key={s}
            style={{ padding: '12px 24px', borderRadius: 10, background: 'var(--bg2)', border: '1px solid var(--border)', fontSize: 14, fontWeight: 500, color: 'var(--text)', transition: 'all 0.2s', cursor: 'default' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(110,231,183,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg2)' }}
          >{s}</div>
        ))}
      </div>

      <div style={{ marginTop: 60, padding: 32, background: 'var(--bg2)', borderRadius: 16, border: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{t.languages}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {t.langList.map(([lang, pct, lvl]) => (
            <div key={lang}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{lang}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>{lvl}</span>
              </div>
              <div style={{ height: 4, background: 'var(--border)', borderRadius: 2 }}>
                <div style={{ height: '100%', borderRadius: 2, width: `${pct}%`, background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
