import { Megaphone, Mail, ArrowRight } from 'lucide-react'
import './SpeakUp.css'

export default function SpeakUp() {
  return (
    <section className="speak-up" id="speak-up">
      <div className="container speak-up__inner">
        <div className="speak-up__text">
          <p className="eyebrow speak-up__eyebrow">
            <Megaphone size={14} /> Speak Up
          </p>
          <h2>See doping-related misconduct? Report it.</h2>
          <p className="speak-up__desc">
            NADA India seeks cooperation from every stakeholder in sport. If
            you observe any doping-related misconduct, report it
            immediately — your identity will be protected.
          </p>
        </div>
        <div className="speak-up__action">
          <a className="speak-up__mail" href="mailto:speakup-nada@gov.in">
            <Mail size={16} /> speakup-nada@gov.in
          </a>
          <a href="#" className="btn btn--primary speak-up__btn">
            Report Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
