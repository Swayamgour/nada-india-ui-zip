import { HeartHandshake, GraduationCap, Presentation, ArrowRight } from 'lucide-react'
import './Engage.css'

const ITEMS = [
  { icon: HeartHandshake, title: 'Become a Volunteer', desc: 'Support outreach and testing operations near you.' },
  { icon: GraduationCap, title: 'Start the Internship', desc: 'Work alongside NADA India\u2019s education & research teams.' },
  { icon: Presentation, title: 'Request Educational Activities', desc: 'Bring an awareness session to your institute or federation.' },
]

export default function Engage() {
  return (
    <section className="section engage">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow eyebrow--onink">Engage With Us</p>
            <h2 className="engage__heading">Be part of the clean sport movement</h2>
          </div>
        </div>

        <div className="engage__grid">
          {ITEMS.map((item) => (
            <a href="#" className="engage__card" key={item.title}>
              <item.icon size={26} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="engage__link">
                Get started <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
