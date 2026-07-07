import './Partners.css'

const PARTNERS = [
  'WADA',
  'UNESCO',
  'Ministry of Youth Affairs & Sports',
  'National Sports Federations',
  'SAI',
  'Indian Olympic Association',
]

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <p className="eyebrow">Our Partners</p>
        <div className="partners__row">
          {PARTNERS.map((name) => (
            <span className="partners__badge" key={name}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
