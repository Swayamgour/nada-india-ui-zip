import {
  Gavel,
  UserCheck,
  Ban,
  ClipboardList,
  Fingerprint,
  MapPin,
  Pill,
  FileHeart,
  BookOpen,
} from 'lucide-react'
import './QuickAccess.css'

const ITEMS = [
  { icon: Gavel, label: 'The Rules', desc: 'National Anti-Doping Rules, 2021' },
  { icon: UserCheck, label: 'Rights & Responsibilities', desc: 'What every athlete must know' },
  { icon: Ban, label: 'Prohibited Substances', desc: '2025 Prohibited List' },
  { icon: ClipboardList, label: 'Doping Control Process', desc: 'Sample collection walkthrough' },
  { icon: Fingerprint, label: 'Athlete Biological Passport', desc: 'Longitudinal profiling' },
  { icon: MapPin, label: 'Whereabouts', desc: 'ADAMS filing requirements' },
  { icon: Pill, label: 'Risk of Nutritional Supplements', desc: 'Contamination risk guide' },
  { icon: FileHeart, label: 'Therapeutic Use Exemption', desc: 'TUE application process' },
  { icon: BookOpen, label: 'NADA Booklet', desc: 'Fair Play & TUE handbooks' },
]

export default function QuickAccess() {
  return (
    <section className="section toolkit" id="toolkit">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Athlete Toolkit</p>
            <h2>Everything an athlete needs, in one place</h2>
          </div>
          <a href="#" className="section-link">
            View all resources →
          </a>
        </div>

        <div className="toolkit__grid">
          {ITEMS.map((item, i) => (
            <a href="#" className="toolkit__card" key={item.label}>
              <span className="toolkit__index">{String(i + 1).padStart(2, '0')}</span>
              <item.icon size={26} strokeWidth={1.6} className="toolkit__icon" />
              <h3 className="toolkit__label">{item.label}</h3>
              <p className="toolkit__desc">{item.desc}</p>
              <div className="lane-rule toolkit__rule" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
