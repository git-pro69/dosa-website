'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Camera,
  ChevronDown,
  CirclePlay,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'

const images = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5bxAFzSYeAh0O8GfL2yvpqErduZWsP.png',
  cafe: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EoJF11KAiTDtwX7IoFw1CMSpeE83HT.png',
  dosa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jfPnRqnThQ5Fyj862D8FR5cvkfVbys.png',
  spread: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fRAUVhdZPSxBG0BnWUpWOkxCPi84Je.png',
  exterior: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-P24nNopibFdlIQ8f7yZlgQCoGOa0LF.jpeg',
  rooted: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i04pBiQrIi3bu50xjmxeVwkZT804Ud.png',
}

const navItems = [
  { label: 'Our story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

const menuItems = [
  { name: 'The Loni Dosa', detail: 'Ghee, house podi, coconut chutney', price: '₹195', image: images.dosa },
  { name: 'Benne Masala Dosa', detail: 'Potato palya, cultured butter, sambar', price: '₹235', image: images.spread },
  { name: 'Filter Coffee', detail: 'Slow-brewed, served steel tumbler style', price: '₹95', image: images.cafe },
]

const locations = [
  { city: 'Jayanagar', note: 'The original table', address: '12th Main, Bengaluru' },
  { city: 'Indiranagar', note: 'For late lunches', address: '100 Feet Road, Bengaluru' },
  { city: 'Hyderabad', note: 'A new South Indian ritual', address: 'Jubilee Hills, Hyderabad' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Davangiri Loni Dosa home">
          <img src={images.logo} alt="Davangiri Loni Dosa" />
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Find a table <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster={images.cafe} aria-hidden="true">
          <source src="/videos/davangiri-hero.mp4" type="video/mp4" />
          Your browser does not support background video. Explore Davangiri Loni Dosa below.
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner section-shell">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">A Bengaluru original · Est. 2000</p>
            <h1>दावणगिरी लोणी<br /><em>Dosa </em></h1>
            <p className="hero-intro">A little more butter. A lot more feeling. We make the dosa you remember, the coffee you crave, and the kind of mornings you want to repeat.</p>
            <div className="hero-actions">
              <a className="hero-button" href="#menu">View menu <ArrowDownRight size={18} /></a>
              <a className="hero-text-link" href="#locations">Find us <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-side-note">Come hungry<br />leave lighter</div>
        </div>
      </section>

      <section className="statement">
        <div className="statement-content">
          <p className="display-copy">ROOTED IN KOLHAPUR,<br /><span>INSPIRED BY SOUTH</span></p>
        </div>
      </section>

      <section id="story" className="dark-story">
        <div className="section-shell story-grid">
          <div className="story-image"><img src={images.exterior} alt="Guests arriving outside Davangiri Loni Dosa in the evening" /></div>
          <div className="story-copy"><p className="eyebrow">Our story</p><h2>Not fast food.<br /><em>Food with a pulse.</em></h2><p>We started with one iron tawa, a family recipe, and a belief that the best food does not need to shout. It just needs to be hot, honest, and shared across a table.</p><a className="light-link" href="#contact">Meet us at the cafe <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section id="menu" className="menu-section section-shell">
        <div className="section-heading"><div><p className="eyebrow">The morning show</p><h2>Warning: cravings<br /><em>ahead.</em></h2></div><p>Everything is made to order, with a little extra loni and a lot of South Indian soul.</p></div>
        <div className="menu-grid">
          {menuItems.map((item, index) => <article className={`menu-card ${index === 0 ? 'featured-card' : ''}`} key={item.name}><div className="menu-card-image"><img src={item.image} alt={item.name} /><span>{index === 0 ? 'House favourite' : 'Always on'}</span></div><div className="menu-card-info"><div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong></div></article>)}
        </div>
        <div className="menu-bottom"><span>Vegetarian kitchen · all day breakfast</span><a className="text-link" href="#contact">View full menu <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="values-section">
        <div className="section-shell values-grid"><div><p className="eyebrow">Our values</p><h2>Simple things,<br /><em>done properly.</em></h2></div><div className="value-list"><div><span>01</span><h3>Meticulous technique</h3><p>Fermented batter, a seasoned tawa, and the patience to wait for the perfect lace.</p></div><div><span>02</span><h3>Warm hospitality</h3><p>Come as you are. There is always room for one more at our table.</p></div><div><span>03</span><h3>Local generosity</h3><p>We source close, cook fresh, and keep the good stuff moving through our neighbourhoods.</p></div></div></div>
      </section>

      <section id="locations" className="locations-section section-shell"><div className="section-heading"><div><p className="eyebrow">Find us</p><h2>Always close to<br /><em>your next craving.</em></h2></div><p>Three rooms, one feeling. Pull up a chair in Bengaluru or Hyderabad and let us do the rest.</p></div><div className="locations-grid">{locations.map((location, index) => <article className="location-card" key={location.city}><div className="location-number">0{index + 1}</div><h3>{location.city}</h3><p>{location.note}</p><span>{location.address}</span><a href="#contact" aria-label={`Get directions to ${location.city}`}>Get directions <ArrowUpRight size={15} /></a></article>)}</div></section>

      <section className="gallery-strip"><img src={images.spread} alt="A colourful South Indian breakfast spread" /><div><p className="eyebrow">From our table</p><h2>Fresh. Local.<br /><em>Legendary.</em></h2><a className="light-link" href="#contact">See what is cooking <ArrowUpRight size={17} /></a></div><img src={images.dosa} alt="Crisp dosa served with chutneys" /></section>

      <section className="quotes-section section-shell"><p className="eyebrow">Kind words</p><div className="quote-mark">“</div><blockquote>It tastes like someone took the best Sunday morning you have ever had and put it on a banana leaf.</blockquote><p className="quote-source">— A very happy regular, Jayanagar</p></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-grid"><div className="contact-copy"><p className="eyebrow">Got questions?</p><h2>We have<br /><em>chutney.</em></h2><p>Feedback, franchise ideas, birthday plans, or just want to tell us how much you love dosa? We are listening.</p><div className="contact-details"><a href="tel:+918151999191"><Phone size={20} /><span>Call us<br /><strong>+91 81519 99191</strong></span></a><a href="mailto:hello@davangiriloni.com"><Mail size={20} /><span>Write to us<br /><strong>hello@davangiriloni.com</strong></span></a><div><MapPin size={20} /><span>Visit us<br /><strong>Jayanagar, Bengaluru</strong></span></div></div></div><form className="contact-form" onSubmit={handleSubmit}><h3>Just drop your message here.</h3><label>Name<input required name="name" placeholder="Your full name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell us what is on your mind..." /></label><button type="submit">{sent ? <><Check size={17} /> Message sent</> : <>Send it over <ArrowUpRight size={17} /></>}</button>{sent && <p className="form-note" role="status">Thank you. We will get back to you shortly.</p>}</form></div></section>

      <footer className="site-footer"><div className="section-shell footer-top"><a className="footer-brand" href="#top"><img src={images.logo} alt="Davangiri Loni Dosa" /></a><div className="footer-links"><div><p className="eyebrow">Explore</p><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#locations">Locations</a></div><div><p className="eyebrow">Say hello</p><a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /> Instagram</a><a href="https://youtube.com" aria-label="YouTube"><CirclePlay size={18} /> YouTube</a></div></div></div><div className="section-shell footer-bottom"><span>© 2026 Davangiri Loni Dosa</span><span>Made with ghee & good intentions</span><a href="#top">Back to top <ChevronDown size={15} className="rotate-180" /></a></div></footer>
    </main>
  )
}
