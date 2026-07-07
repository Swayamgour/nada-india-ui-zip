import { useState } from 'react'
import { Search, Menu, X, ShieldCheck } from 'lucide-react'
import './Header.css'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Athlete Testing', href: '#toolkit' },
  { label: 'Education', href: '#support' },
  { label: 'Media', href: '#news' },
  { label: 'Resources', href: '#reach-out' },
  { label: 'Contact', href: '#footer' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <p className="header__gov">
            <ShieldCheck size={14} strokeWidth={2.4} />
            Government of India · Ministry of Youth Affairs &amp; Sports
          </p>
          <div className="header__lang">
            <a href="#" aria-current="true">English</a>
            <span aria-hidden="true">/</span>
            <a href="#">हिन्दी</a>
          </div>
        </div>
      </div>

      <div className="container header__main">
        <a href="#home" className="header__brand">
          <span className="header__brand-mark">NADA</span>
          <span className="header__brand-sub">National Anti-Doping<br />Agency, India</span>
        </a>

        <nav className="header__nav header__nav--desktop" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="header__search" aria-label="Search">
            <Search size={18} strokeWidth={2} />
          </button>
          <a href="#speak-up" className="btn btn--primary header__report">
            Report Now
          </a>
          <button
            className="header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="header__nav--mobile" aria-label="Primary mobile">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div className="lane-rule" aria-hidden="true" />
    </header>
  )
}
