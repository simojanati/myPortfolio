import logo from '../assets/logo.png'
import { IconLinkedIn, IconGitHub } from './Icons'
import { LINKEDIN, GITHUB } from '../data'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer-bar" style={{ borderTop: '1px solid var(--border)', padding: '24px 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, color: 'var(--muted)', fontSize: 13 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={logo} alt="MJI" style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'cover' }} />
        <span style={{ fontFamily: 'Syne', fontWeight: 700, color: 'var(--accent)' }}>MJI.</span>
      </div>
      <div>{t.footerCopy}</div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href={LINKEDIN} target="_blank" rel="noreferrer"
          style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#3B82F6'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        ><IconLinkedIn /> LinkedIn</a>
        <a href={GITHUB} target="_blank" rel="noreferrer"
          style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        ><IconGitHub /> GitHub</a>
      </div>
    </footer>
  )
}
