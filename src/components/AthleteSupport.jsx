import { Gavel, UserCheck, BookOpen, Pill, ArrowUpRight } from 'lucide-react'
import './AthleteSupport.css'

const ITEMS = [
  { icon: Gavel, label: 'Anti-Doping Rules' },
  { icon: UserCheck, label: 'Rights & Responsibilities' },
  { icon: BookOpen, label: 'Awareness Material' },
  { icon: Pill, label: 'Risk of Nutritional Supplements' },
]

export default function AthleteSupport() {
  return (
    <section className="section support" id="support">
      <div className="container support__inner">
        <div className="support__heading">
          <p className="eyebrow">Athlete Support Personnel</p>
          <h2>
            A resource centre for coaches, medics
            <br />
            &amp; support staff
          </h2>
          <p className="support__desc">
            Every individual, including Athlete Support Personnel, bears
            responsibility for upholding the integrity of clean sport. The
            Anti-Doping Rules apply to all.
          </p>
        </div>

        <div className="support__list">
          {ITEMS.map((item) => (
            <a href="#" className="support__row" key={item.label}>
              <span className="support__row-left">
                <item.icon size={20} strokeWidth={1.7} />
                {item.label}
              </span>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
