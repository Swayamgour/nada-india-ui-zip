import { Calendar, ArrowRight } from 'lucide-react'
import './News.css'

// Sample placeholders — wire up to your News CPT / API endpoint.
const NEWS = [
  {
    tag: 'Press Release',
    title: 'Annual testing statistics report published',
    date: 'Add date',
  },
  {
    tag: 'Circular',
    title: 'Updated Registered Testing Pool notified for 2026',
    date: 'Add date',
  },
  {
    tag: 'Education',
    title: 'New Learn With ADEL module released for athlete support personnel',
    date: 'Add date',
  },
]

export default function News() {
  return (
    <section className="section news" id="news">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Media</p>
            <h2>Latest news</h2>
          </div>
          <a href="#" className="section-link">
            Browse all news →
          </a>
        </div>

        <div className="news__grid">
          {NEWS.map((item) => (
            <a href="#" className="news__card" key={item.title}>
              <div className="news__thumb" aria-hidden="true" />
              <div className="news__body">
                <span className="news__tag">{item.tag}</span>
                <h3 className="news__title">{item.title}</h3>
                <span className="news__date">
                  <Calendar size={13} /> {item.date}
                </span>
              </div>
              <ArrowRight size={16} className="news__arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
