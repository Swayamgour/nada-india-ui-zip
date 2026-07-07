import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import './Footer.css'

const LINKS = [
  ['Home', 'About Us', 'Athlete Testing', 'Prohibited Substances', 'Education & Awareness'],
  ['Adjudication Process', 'NSFs Registration', 'Tenders', 'RTI', 'Sitemap'],
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="lane-rule lane-rule--dark" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <span className="footer__mark">NADA INDIA</span>
          <p className="footer__contact">
            <MapPin size={15} />
            Ramp No. 02, Hall No. 103–104, First Floor, Jawaharlal Nehru
            Stadium Complex, Lodhi Road, New Delhi – 110003
          </p>
          <p className="footer__contact">
            <Phone size={15} /> +91-11-24368274
          </p>
          <p className="footer__contact">
            <Mail size={15} /> info[dot]nada[at]nic[dot]in
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/NADAIndiaOfficial/" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="https://twitter.com/NADAIndiaOffice" aria-label="Twitter"><Twitter size={17} /></a>
            <a href="https://www.instagram.com/nadaindiaoffice/" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.youtube.com/channel/UCkmHEXijkDt4t0yNj6e-Hog" aria-label="YouTube"><Youtube size={17} /></a>
          </div>
        </div>

        {LINKS.map((col, i) => (
          <div className="footer__col" key={i}>
            {col.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </div>
        ))}

        <div className="footer__col footer__subscribe">
          <span className="footer__col-title">Stay Updated</span>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" required />
            <button type="submit" className="btn btn--primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} NADA India. All rights reserved.</span>
        <a href="#">Data Protection Policy</a>
      </div>
    </footer>
  )
}
