import { PhoneCall, Scale, Stethoscope, ArrowRight } from 'lucide-react'
import './ReachOut.css'

const ITEMS = [
  {
    icon: PhoneCall,
    title: 'Helpline',
    desc: 'Talk to the NADA India team about testing, rules or a case.',
    cta: 'Contact us',
  },
  {
    icon: Scale,
    title: 'Legal Aid',
    desc: 'Guidance on adjudication, hearings and the appeal process.',
    cta: 'Get support',
  },
  {
    icon: Stethoscope,
    title: 'Know Your Medicine',
    desc: 'Check medicines and supplements against the Prohibited List.',
    cta: 'Search database',
  },
]

export default function ReachOut() {
  return (
    <section className="section reach-out" id="reach-out">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Reach Out</p>
            <h2>Support, whenever you need it</h2>
          </div>
        </div>

        <div className="reach-out__grid">
          {ITEMS.map((item) => (
            <div className="reach-out__card" key={item.title}>
              <item.icon size={28} strokeWidth={1.5} className="reach-out__icon" />
              <h3 className="reach-out__title">{item.title}</h3>
              <p className="reach-out__desc">{item.desc}</p>
              <a href="#" className="reach-out__cta">
                {item.cta} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
