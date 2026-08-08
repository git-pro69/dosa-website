'use client'

import { ArrowUpRight, Camera, CirclePlay, Menu, X } from 'lucide-react'
import { useState } from 'react'

const images = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5bxAFzSYeAh0O8GfL2yvpqErduZWsP.png',
  cafe: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EoJF11KAiTDtwX7IoFw1CMSpeE83HT.png',
  storefront: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D8I9Wxi83qdzwEUDMXCDBip9rAYuSj.png',
  spread: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fRAUVhdZPSxBG0BnWUpWOkxCPi84Je.png',
  dosa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jfPnRqnThQ5Fyj862D8FR5cvkfVbys.png',
  heroTexture: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-axL60KLm5JxoSQ2vmVZcAXpbYe7aEl.png',
  story: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XZ2lMuRF2rfIKq1ByB5unQwxe3tuKU.png',
  brandLeaf: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2842%29-josVdKhrWztoNGP3257mYMMguS0vfc.png',
}

const navItems = [
  { label: 'Our story', href: '/#story' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Locations', href: '/#locations' },
  { label: 'Contact', href: '/#contact' },
]

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="about-page">
      <header className="site-header">
        <a className="brand-mark" href="/" aria-label="Davangiri Loni Dosa home"><img src={images.logo} alt="Davangiri Loni Dosa" /></a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Find a table <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <section className="brand-ad" aria-label="Davangiri Loni Dosa story">
        <img className="brand-ad-leaf" src={images.brandLeaf} alt="Green botanical Davangiri emblem" />
        <div className="brand-ad-copy">
          <p className="eyebrow">Davangiri Loni Dosa</p>
          <h2>South Indian Soul,<br /><em>Modern Bite.</em></h2>
          <p>Hot off the tawa, rooted in tradition, and made for the way you eat now.</p>
        </div>
      </section>

      <section className="about-intro about-shell">
        <img src={images.storefront} alt="Davangiri Loni Dosa storefront and cafe interior" />
        <div className="about-intro-copy"><h2>Our Cafe is our <em>Temple</em>,<br />Our Customers are <em>Gods</em>,<br />& What we serve, is <em>Prasadam</em></h2><p>The Davangiri Loni Dosa cafe is a premium South Indian chain by M. Abilton Venkatesh Pillai. We serve authentic cuisine that is fresh, hot, and true to tradition. Every meal is made with care, hygiene, and heart.</p></div>
      </section>

      <section className="about-founders about-shell"><img src={images.spread} alt="The people behind Davangiri Loni Dosa" /><div><p className="eyebrow">The minds behind</p><h2>The <em>Magic</em></h2><p>Built by people who believe South Indian food deserves a modern stage without losing its soul. Our founders bring hospitality, detail, and an instinct for making every guest feel at home.</p><div className="founder-note"><h3>Divya Raghavendra Rao</h3><p>Co-founder and managing director, bringing thoughtful leadership and a deep love for the rituals that make a cafe feel like family.</p></div></div></section>

      <section className="about-ideology"><div className="about-ideology-inner about-shell"><img src={images.story} alt="A quiet portrait and temple-inspired scene" /><div><p className="eyebrow">Our guiding light</p><h2>Ideology &amp; <em>History</em></h2><p>The idea of Davangiri Loni Dosa was born out of a deep love for tradition and a vision inspired by the places and people that make South India unforgettable. We keep the recipes honest, the welcome generous, and the future open.</p><p>Our story is one of patience, craft, and a belief that simple food can hold a whole culture. Every plate is a small act of remembrance and a reason to gather.</p></div></div></section>

      <section className="about-values"><div className="about-shell about-values-head"><p className="eyebrow">What we stand for</p><h2>Rooted in tradition,<br /><em>made for today.</em></h2></div><div className="about-shell about-value-grid"><article><img src={images.dosa} alt="Fresh dosa served at the cafe" /><h3>Meticulous technique</h3><p>Fermented batter, a seasoned tawa, and the patience to wait for the perfect lace.</p></article><article><img src={images.cafe} alt="Guests gathering at the cafe" /><h3>Guest-centric culture</h3><p>Every table matters. We listen closely, welcome warmly, and make room for one more.</p></article><article><img src={images.spread} alt="Fresh ingredients and South Indian dishes" /><h3>Authenticity</h3><p>We source thoughtfully and cook with the generosity, clarity, and soul of home.</p></article></div></section>

      <section className="about-fresh about-shell"><div><h2>Fresh. Local.<br /><em>Legendary.</em></h2></div><p>From the farms to your plate, we work with trusted partners and nearby producers to keep our food honest, seasonal, and full of South Indian flavour.</p></section>

      <section className="about-sustainability"><div className="about-shell"><p className="eyebrow">Our promise</p><h2>Green inside,<br /><em>ghee outside.</em></h2><p>Thoughtful spaces, responsible sourcing, and less waste are part of the recipe. We believe care should be visible in every corner of the cafe and every detail of the experience.</p></div></section>

      <footer className="site-footer"><div className="section-shell footer-top"><a className="footer-brand" href="/"><img src={images.logo} alt="Davangiri Loni Dosa" /></a><div className="footer-links"><div><p className="eyebrow">Explore</p><a href="/">Home</a><a href="/#story">Our story</a><a href="/about">About</a></div><div><p className="eyebrow">Say hello</p><a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /> Instagram</a><a href="https://youtube.com" aria-label="YouTube"><CirclePlay size={18} /> YouTube</a></div></div></div><div className="section-shell footer-bottom"><span>© 2026 Davangiri Loni Dosa</span><span>Made with ghee &amp; good intentions</span><a href="#top">Back to top <ArrowUpRight size={15} /></a></div></footer>
    </main>
  )
}
