import { useState, useEffect } from 'react'
import photo from '../assets/photo.png'
import { IconLinkedIn, IconGitHub } from './Icons'
import { LINKEDIN, GITHUB } from '../data'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const [typed, setTyped] = useState('')
  const [pIdx, setPIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const PHRASES = t.nav[0] === 'Accueil'
    ? ['Ingénieur Full Stack', 'Team Lead', 'Expert Java', 'Dev SAP Commerce']
    : ['Full Stack Engineer', 'Team Lead', 'Java Expert', 'SAP Commerce Dev']

  useEffect(() => {
    const phrase = PHRASES[pIdx]
    let timer
    if (!deleting && typed.length < phrase.length)
      timer = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 80)
    else if (!deleting && typed.length === phrase.length)
      timer = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && typed.length > 0)
      timer = setTimeout(() => setTyped(typed.slice(0, -1)), 40)
    else if (deleting && typed.length === 0) {
      setDeleting(false)
      setPIdx((pIdx + 1) % PHRASES.length)
    }
    return () => clearTimeout(timer)
  }, [typed, deleting, pIdx, PHRASES])

  return (
    <section id="about" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 4rem 4rem', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 860, width: '100%', flex: 1 }}>

        <div className="fu" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: 'rgba(110,231,183,0.08)', border: '1px solid rgba(110,231,183,0.2)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32, fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
          {t.available}
        </div>

        <h1 className="fu1" style={{ fontFamily: 'Syne', fontSize: 'clamp(42px, 6vw, 80px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Mohammed<br />
          <span style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Janati Idrissi
          </span>
        </h1>

        <div className="fu2" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginBottom: 28, height: 36, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--muted)' }}>{t.subtitle}</span>
          <span style={{ color: 'var(--accent)', fontWeight: 600, fontFamily: 'Syne' }}>{typed}</span>
          <span style={{ width: 2, height: '1.1em', background: 'var(--accent)', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
        </div>

        <p className="fu3" style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, marginBottom: 40, lineHeight: 1.8 }}>
          {t.description}{' '}
          <strong style={{ color: 'var(--text)' }}>Airbus, Nespresso & Maroc Telecom</strong>
          {t.descriptionEnd}
        </p>

        <div className="fu4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#projects"
            style={{ padding: '14px 32px', borderRadius: 8, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: '#000', fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(110,231,183,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >{t.seeProjects}</a>
          <a href="#contact"
            style={{ padding: '14px 32px', borderRadius: 8, border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 500, fontSize: 15, textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(110,231,183,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
          >{t.contactMe}</a>
        </div>

        <div style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          {t.stats.map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'Syne', fontSize: 36, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 8, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent2)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.1)'}
          ><IconLinkedIn /> LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 8, background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', color: 'var(--accent)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(110,231,183,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(110,231,183,0.1)'}
          ><IconGitHub /> GitHub</a>
        </div>
      </div>

      <div className="hero-photo" style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <div style={{ width: 300, height: 380, borderRadius: 24, overflow: 'hidden', border: '2px solid rgba(110,231,183,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', position: 'relative' }}>
          <img src={photo} alt="Mohammed Janati Idrissi" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.95) contrast(1.05)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 65%, rgba(6,8,16,0.7) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', background: 'rgba(13,17,23,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(110,231,183,0.3)', borderRadius: 20, padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>{t.openToWork}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
