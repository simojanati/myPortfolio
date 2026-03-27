import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IconLinkedIn, IconGitHub } from './Icons'
import { LINKEDIN, GITHUB } from '../data'
import { useLang } from '../context/LangContext'

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggle } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navIds = ['about', 'experience', 'projects', 'skills', 'contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem',
        background: scrolled || menuOpen ? 'rgba(6,8,16,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="MJI Logo" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 18, color: 'var(--accent)', letterSpacing: 1 }}>
            MJI<span style={{ color: 'var(--muted)' }}>.</span>
          </span>
        </div>

        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem' }}>
          {t.nav.map((label, i) => (
            <a key={label} href={`#${navIds[i]}`}
              style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: active === navIds[i] ? 'var(--accent)' : 'var(--muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = active === navIds[i] ? 'var(--accent)' : 'var(--muted)'}
            >{label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={toggle}
              style={{ display: 'flex', alignItems: 'center', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', padding: 0 }}>
              {['FR', 'EN'].map(l => (
                <span key={l} style={{ padding: '6px 12px', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', background: lang === l ? 'var(--accent)' : 'transparent', color: lang === l ? '#000' : 'var(--muted)', transition: 'all 0.2s' }}>{l}</span>
              ))}
            </button>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn"
              style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.color = '#3B82F6' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
            ><IconLinkedIn /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer" title="GitHub"
              style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
            ><IconGitHub /></a>
            <a href="mailto:simojanati92@gmail.com"
              style={{ padding: '8px 20px', borderRadius: 6, border: '1px solid var(--accent)', color: 'var(--accent)', fontSize: 13, textDecoration: 'none', fontWeight: 500, transition: 'all 0.2s', marginLeft: 4 }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >{t.hireMe}</a>
          </div>

          {/* Hamburger button — visible only on mobile via CSS */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 36, height: 36, background: 'transparent', border: '1px solid var(--border)', borderRadius: 8, cursor: 'pointer', padding: 8 }}>
            <span style={{ width: 18, height: 2, background: menuOpen ? 'var(--accent)' : 'var(--text)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', display: 'block' }} />
            <span style={{ width: 18, height: 2, background: 'var(--text)', borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1, display: 'block' }} />
            <span style={{ width: 18, height: 2, background: menuOpen ? 'var(--accent)' : 'var(--text)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', display: 'block' }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99, background: 'rgba(6,8,16,0.97)', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          {t.nav.map((label, i) => (
            <a key={label} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 22, fontWeight: 600, fontFamily: 'Syne', color: active === navIds[i] ? 'var(--accent)' : 'var(--text)', textDecoration: 'none', letterSpacing: '0.05em' }}
            >{label}</a>
          ))}
          <button onClick={toggle}
            style={{ display: 'flex', alignItems: 'center', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', padding: 0, marginTop: 8 }}>
            {['FR', 'EN'].map(l => (
              <span key={l} style={{ padding: '8px 20px', fontSize: 13, fontWeight: 700, background: lang === l ? 'var(--accent)' : 'transparent', color: lang === l ? '#000' : 'var(--muted)', transition: 'all 0.2s' }}>{l}</span>
            ))}
          </button>
          <a href="mailto:simojanati92@gmail.com" onClick={() => setMenuOpen(false)}
            style={{ padding: '12px 32px', borderRadius: 8, border: '1px solid var(--accent)', color: 'var(--accent)', fontSize: 15, textDecoration: 'none', fontWeight: 600 }}
          >{t.hireMe}</a>
        </div>
      )}
    </>
  )
}
