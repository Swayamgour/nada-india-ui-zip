import { ArrowRight, PlayCircle } from 'lucide-react'
import './Hero.css'

const STATS = [
  { value: '5', label: 'Core Mandates', mono: 'SC · RM · EDU · R&I' },
  { value: '2009', label: 'Established Under', mono: 'NADA Rules' },
  { value: '24×7', label: 'Speak Up Channel', mono: 'speakup-nada@gov.in' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__track" aria-hidden="true">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={i}
              x1="-100"
              y1={90 + i * 95}
              x2="1400"
              y2={40 + i * 95}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="26"
            />
          ))}
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">Autonomous Body · Govt. of India</p>
          <h1>
            Clean Sport.
            <br />
            Clear Rules.
          </h1>
          <p className="hero__hindi">स्वच्छ खेल। स्पष्ट नियम।</p>
          <p className="hero__desc">
            NADA India implements the national anti-doping programme — sample
            collection, results management, education &amp; awareness, and
            research &amp; intelligence — to protect the integrity of clean
            sport across the country.
          </p>
          <div className="hero__ctas">
            <a href="#speak-up" className="btn btn--primary">
              Report Now <ArrowRight size={16} />
            </a>
            <a href="#toolkit" className="btn btn--outline">
              <PlayCircle size={16} /> Explore the Athlete Toolkit
            </a>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {STATS.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
              <span className="hero__stat-mono">{s.mono}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
