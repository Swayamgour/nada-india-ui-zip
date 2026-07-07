import React, { useState } from 'react';
import {
  Search, Menu, X, ShieldCheck, ArrowRight, PlayCircle,
  Gavel, UserCheck, Ban, ClipboardList, Fingerprint, MapPin,
  Pill, FileHeart, BookOpen, Megaphone, Mail, ArrowUpRight,
  Calendar, PhoneCall, Scale, Stethoscope, HeartHandshake,
  GraduationCap, Presentation, Phone, Facebook, Twitter,
  Instagram, Youtube,
} from 'lucide-react';
import './index.css';
import logo from './assets/GOV-NADA-Logo-01-1.png';

/* ---------- data ---------- */
const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Athlete Testing', href: '#toolkit' },
  { label: 'Education', href: '#support' },
  { label: 'Media', href: '#news' },
  { label: 'Resources', href: '#reach-out' },
  { label: 'Contact', href: '#footer' },
];

const STATS = [
  {
    value: "SC",
    label: "Sample Collection",
    mono: "Clean Sport Testing"
  },
  {
    value: "RM",
    label: "Results Management",
    mono: "Anti-Doping Process"
  },
  {
    value: "EDU",
    label: "Education & Awareness",
    mono: "Athlete Support"
  },
];

const TOOLKIT = [
  {
    icon: Gavel,
    label: "Athlete Toolkit",
    desc: "Complete anti-doping resources for every athlete.",
    image:
"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  },

  {
    icon: UserCheck,
    label: "Rights & Responsibilities",
    desc: "Know your rights and responsibilities during the anti-doping process."
  },

  {
    icon: Ban,
    label: "Prohibited Substances",
    desc: "Check substances and methods prohibited in sports."
  },

  {
    icon: ClipboardList,
    label: "Doping Control Process",
    desc: "Learn about sample collection and testing procedures."
  },

  {
    icon: MapPin,
    label: "Whereabouts",
    desc: "Information related to athlete whereabouts requirements."
  },

  {
    icon: FileHeart,
    label: "Therapeutic Use Exemption (TUE)",
    desc: "Guidance for athletes requiring medical exemptions."
  },

  {
    icon: Fingerprint,
    label: "Athlete Biological Passport",
    desc: "Monitoring athlete biological markers to protect clean sport."
  },

  {
    icon: Pill,
    label: "Risk of Nutritional Supplements",
    desc: "Understand risks associated with supplement contamination."
  },

  {
    icon: BookOpen,
    label: "NADA Booklet",
    desc: "Educational resources and anti-doping awareness material."
  },
];

const SUPPORT_ITEMS = [
  { icon: Gavel, label: "Anti Doping Rules" },
  { icon: UserCheck, label: "Rights & Responsibilities" },
  { icon: BookOpen, label: "Awareness Material" },
  { icon: Pill, label: "Risk of Nutritional Supplements" },
];

const NEWS = [
  {
    tag: "News",
    title:
      "NADA India continues its commitment towards creating a doping-free sporting environment.",
    date: "Latest Update",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  },

  {
    tag: "Education",
    title:
      "Anti-Doping Education and Awareness initiatives for athletes and support personnel.",
    date: "Latest Update",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80"
  },

  {
    tag: "Programme",
    title:
      "Strengthening clean sport through testing, research and intelligence.",
    date: "Latest Update",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
  },
];

const REACH_OUT = [
  {
    icon: PhoneCall,
    title: "Helpline",
    desc: "Connect with NADA India for anti-doping information and support.",
    cta: "Call Now"
  },
  {
    icon: Scale,
    title: "Legal Aid",
    desc: "Support related to adjudication process and anti-doping matters.",
    cta: "Get Assistance"
  },
  {
    icon: Stethoscope,
    title: "Know Your Medicine",
    desc: "Check medicines before use to avoid prohibited substances.",
    cta: "Check Now"
  }
];

const ENGAGE = [
  {
    icon: HeartHandshake,
    title: "Become a Volunteer",
    desc: "Join NADA India initiatives and promote clean sport awareness."
  },
  {
    icon: GraduationCap,
    title: "Start the Internship",
    desc: "Learn and contribute with NADA India's education programmes."
  },
  {
    icon: Presentation,
    title: "Request Educational Activities",
    desc: "Request awareness sessions for athletes and organisations."
  },
];

const PARTNERS = [
  "World Anti-Doping Agency (WADA)",
  "Sports Authority of India (SAI)",
  "South Asia Regional Anti-Doping Organization",
];

const FOOTER_LINKS = [
  [
    "Home",
    "About Us",
    "Athlete Testing",
    "Results Management",
    "Education & Awareness",
  ],
  [
    "Adjudication Process",
    "NSFs Registration",
    "Tenders",
    "RTI",
    "Resources"
  ]
];

/* ---------- APP ---------- */
export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
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
            {/* <span className="header__brand-mark">NADA</span>
            <span className="header__brand-sub">National Anti-Doping<br />Agency, India</span> */}

            <img src={logo} alt="NADA Logo" width="200" />
          </a>

          <nav className="header__nav header__nav--desktop" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="header__search" aria-label="Search">
              <Search size={18} strokeWidth={2} />
            </button>
            <a href="#speak-up" className="btn btn--primary header__report">Report Now</a>
            <button
              className="header__burger"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen((v) => !v)}
            >
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="header__nav--mobile" aria-label="Primary mobile">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}>{item.label}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero" id="home">
          <div className="hero__glow" aria-hidden="true" />
          <div className="dot-field" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Autonomous Body · Govt. of India</p>
              <h1>
                Protecting The Integrity
                <br />
                <span className="mark">
                  Of Clean Sport
                  <svg className="mark__stroke" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2,28 C60,38 240,10 298,22 C298,30 298,32 298,32 C240,20 60,32 2,36 Z" />
                  </svg>
                </span>
              </h1>
              <p className="hero__hindi">स्वच्छ खेल। स्पष्ट नियम।</p>
              <p className="hero__desc">
                National Anti Doping Agency India implements the Anti-Doping Programme in India and works towards promoting clean, fair and ethical sports through Testing, Education, Awareness, Research and Intelligence.
              </p>
              <div className="hero__ctas">
                <a href="#speak-up" className="btn btn--primary">Report Now <ArrowRight size={16} /></a>
                <a href="#toolkit" className="btn btn--ghost"><PlayCircle size={16} /> Explore the Athlete Toolkit</a>
              </div>
            </div>

            <div className="hero__panel">
              <span className="hero__panel-tag">At a glance</span>
              <div className="hero__panel-stats">
                {STATS.map((s) => (
                  <div className="hero__panel-stat" key={s.label}>
                    <span className="hero__panel-value">{s.value}</span>
                    <span className="hero__panel-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ATHLETE TOOLKIT ===== */}
        <section className="section toolkit" id="toolkit">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Athlete Toolkit</p>
                <h2>Everything an athlete needs, in one place</h2>
              </div>
              <a href="#" className="section-link">View all resources →</a>
            </div>

            <div className="toolkit__grid">

              {TOOLKIT.map((item, i) => (

                <a
                  href="#"
                  className={`toolkit__card ${i === 0 ? "toolkit__card--wide" : ""
                    }`}
                  key={item.label}
                >


                  {i === 0 && item.image ? (

                    <img
                      src={item.image}
                      alt={item.label}
                      className="toolkit__image"
                    />

                  ) : (

                    <>

                      <span className="toolkit__index">
                        {String(i + 1).padStart(2, "0")}
                      </span>


                      <item.icon
                        size={26}
                        strokeWidth={1.6}
                        className="toolkit__icon"
                      />


                      <h3 className="toolkit__label">
                        {item.label}
                      </h3>


                      <p className="toolkit__desc">
                        {item.desc}
                      </p>


                    </>

                  )}


                </a>

              ))}

            </div>
          </div>
        </section>

        {/* ===== SPEAK UP ===== */}
        <section className="speak-up" id="speak-up">
          <div className="container speak-up__inner">
            <div className="speak-up__text">
              <p className="eyebrow speak-up__eyebrow"><Megaphone size={14} /> Speak Up</p>
              <h2>See doping-related misconduct? Report it.</h2>
              <p className="speak-up__desc">
                NADA India seeks cooperation from every stakeholder in sport. If you observe any doping-related misconduct, report it immediately — your identity will be protected.
              </p>
            </div>
            <div className="speak-up__action">
              <a className="speak-up__mail" href="mailto:speakup-nada@gov.in">
                <Mail size={16} /> speakup-nada@gov.in
              </a>
              <a href="#" className="btn btn--primary speak-up__btn">Report Now <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* ===== ATHLETE SUPPORT PERSONNEL ===== */}
        <section className="section section--alt support" id="support">
          <div className="container support__inner">
            <div className="support__heading">
              <p className="eyebrow">Athlete Support Personnel</p>
              <h2>A resource centre for coaches, medics<br />&amp; support staff</h2>
              <p className="support__desc">
                Every individual, including Athlete Support Personnel, bears responsibility for upholding the integrity of clean sport. The Anti-Doping Rules apply to all.
              </p>
            </div>

            <div className="support__list">
              {SUPPORT_ITEMS.map((item) => (
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

        {/* ===== NEWS ===== */}
        <section className="section section--alt news" id="news">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Media</p>
                <h2>Latest news</h2>
              </div>
              <a href="#" className="section-link">Browse all news →</a>
            </div>

            <div className="news__grid">
              {NEWS.map((item) => (
                <a href="#" className="news__card" key={item.title}>
                  <img
                    src={item.image}
                    className="news__thumb"
                    alt={item.title}
                  />
                  <div className="news__body">
                    <span className="news__tag">{item.tag}</span>
                    <h3 className="news__title">{item.title}</h3>
                    <span className="news__date"><Calendar size={13} /> {item.date}</span>
                  </div>
                  <ArrowRight size={16} className="news__arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REACH OUT ===== */}
        <section className="section section--alt reach-out" id="reach-out">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Reach Out</p>
                <h2>Support, whenever you need it</h2>
              </div>
            </div>

            <div className="reach-out__grid">
              {REACH_OUT.map((item) => (
                <div className="reach-out__card" key={item.title}>
                  <item.icon size={28} strokeWidth={1.5} className="reach-out__icon" />
                  <h3 className="reach-out__title">{item.title}</h3>
                  <p className="reach-out__desc">{item.desc}</p>
                  <a href="#" className="reach-out__cta">{item.cta} <ArrowRight size={15} /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ENGAGE WITH US ===== */}
        <section className="section engage">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow eyebrow--onink">Engage With Us</p>
                <h2 className="engage__heading">Be part of the clean sport movement</h2>
              </div>
            </div>

            <div className="engage__grid">
              {ENGAGE.map((item) => (
                <a href="#" className="engage__card" key={item.title}>
                  <item.icon size={26} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="engage__link">Get started <ArrowRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PARTNERS ===== */}
        <section className="partners">
          <div className="container">
            <p className="eyebrow">Our Partners</p>
            <div className="partners__row">
              {PARTNERS.map((name) => (
                <span className="partners__badge" key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <div className="container footer__grid">
          <div className="footer__col footer__brand">
            <span className="footer__mark">NADA INDIA</span>
            <p className="footer__contact">
              <MapPin size={15} />
              Ramp No. 02, Hall No. 103–104, First Floor, Jawaharlal Nehru Stadium Complex, Lodhi Road, New Delhi – 110003
            </p>
            <p className="footer__contact"><Phone size={15} /> +91-11-24368274</p>
            <p className="footer__contact"><Mail size={15} /> info[dot]nada[at]nic[dot]in</p>
            <div className="footer__social">
              <a href="https://www.facebook.com/NADAIndiaOfficial/" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="https://twitter.com/NADAIndiaOffice" aria-label="Twitter"><Twitter size={17} /></a>
              <a href="https://www.instagram.com/nadaindiaoffice/" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://www.youtube.com/channel/UCkmHEXijkDt4t0yNj6e-Hog" aria-label="YouTube"><Youtube size={17} /></a>
            </div>
          </div>

          {FOOTER_LINKS.map((col, i) => (
            <div className="footer__col" key={i}>
              {col.map((link) => (<a href="#" key={link}>{link}</a>))}
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
    </>
  );
}