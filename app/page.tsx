'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Camera, Check, CirclePlay, Mail, MapPin, Menu, Phone, X } from 'lucide-react'

const images = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5bxAFzSYeAh0O8GfL2yvpqErduZWsP.png',
  cafe: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EoJF11KAiTDtwX7IoFw1CMSpeE83HT.png',
  dosa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jfPnRqnThQ5Fyj862D8FR5cvkfVbys.png',
  spread: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fRAUVhdZPSxBG0BnWUpWOkxCPi84Je.png',
  exterior: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-P24nNopibFdlIQ8f7yZlgQCoGOa0LF.jpeg',
  waterfront: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DxzDydxPFh4u9QREMx6HKlQV8NfDwW.png',
}

const navItems = [{ label: 'Our story', href: '#story' }, { label: 'Tradition', href: '#tradition' }, { label: 'The tawa', href: '#tawa' }, { label: 'Contact', href: '#contact' }]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  return (
    <main className="about-page">
      <header className="site-header"><a className="brand-mark" href="#top" aria-label="Davangiri Loni Dosa home"><img src={images.logo} alt="Davangiri Loni Dosa" /></a><nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Find a table <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></header>

      <section id="top" className="about-hero"><div className="hero-atmosphere" style={{ backgroundImage: `url("${images.waterfront}")` }} /><div className="section-shell about-hero-content"><p className="eyebrow">Davangiri Loni Dosa · Since 2000</p><h1>South Indian soul,<br /><em>modern bite.</em></h1><p className="hero-lede">A story of slow-fermented batter, hot iron tawas, and the generous joy of eating together.</p><a className="outline-link" href="#story">Discover our story <ArrowDownRight size={17} /></a></div><span className="hero-index">About us / 01</span></section>

      <section id="story" className="about-intro section-shell"><div className="intro-label"><span className="eyebrow">Our story</span><span>01 — 06</span></div><div className="intro-copy"><h2>Good food does not need to shout. It just needs to be <em>honest.</em></h2><p>We began with one iron tawa, a family recipe, and a belief that the best meals are the ones that make you slow down. Davangiri Loni Dosa is our way of keeping South Indian breakfast warm, familiar, and alive.</p><p>Every plate carries a little of where we come from: the buttery loni, the crackle of a dosa edge, the first sip of filter coffee, and a table that always has room for one more.</p></div></section>

      <section id="tradition" className="tradition-section"><div className="section-shell tradition-grid"><div className="tradition-image"><img src={images.cafe} alt="Davangiri Loni Dosa cafe exterior" /></div><div className="tradition-copy"><p className="eyebrow">The Davangiri tradition</p><h2>Rooted in <em>Kolhapur,</em><br />inspired by <em>South.</em></h2><p>Tradition is not a museum piece. It is something you make every morning, with care, consistency, and a little extra butter.</p><a className="text-link" href="#tawa">See our craft <ArrowUpRight size={17} /></a></div></div></section>

      <section className="craft-section section-shell"><div className="craft-heading"><p className="eyebrow">What makes our dosa different</p><h2>Texture is a <em>language.</em></h2><p>Our dosa begins long before it meets the tawa. The result is crisp at the edge, tender at the centre, and unmistakably ours.</p></div><div className="craft-grid"><article><span>01</span><h3>Fermented with patience</h3><p>Time gives the batter its lift, aroma, and beautiful lace.</p></article><article><span>02</span><h3>Finished with loni</h3><p>Our signature butter melts into every fold and golden edge.</p></article><article><span>03</span><h3>Served with warmth</h3><p>Fresh chutney, hot sambar, and a table that feels like home.</p></article></div></section>

      <section id="tawa" className="tawa-section"><div className="section-shell tawa-grid"><div className="tawa-copy"><p className="eyebrow">From the tawa to your table</p><h2>Made hot.<br /><em>Made personal.</em></h2><p>There is no shortcut to a great dosa. Our cooks read the heat, listen to the sizzle, and know exactly when to turn the crisp into a fold.</p><a className="light-link" href="#contact">Come see us cook <ArrowUpRight size={17} /></a></div><div className="tawa-image"><img src={images.dosa} alt="Fresh loni dosa on a plate" /></div></div></section>

      <section className="philosophy-section section-shell"><div className="philosophy-grid"><div><p className="eyebrow">Our philosophy</p><h2>Simple things,<br /><em>done properly.</em></h2></div><div className="philosophy-list"><div><span>01</span><p>Source close. Cook fresh. Waste less.</p></div><div><span>02</span><p>Keep the recipe honest and the welcome generous.</p></div><div><span>03</span><p>Make every plate worth remembering.</p></div></div></div></section>

      <section className="dark-statement"><div className="section-shell dark-statement-inner"><p className="eyebrow">The house note</p><blockquote>“We serve food with a pulse — warm, generous, and made for sharing.”</blockquote><span>Davangiri Loni Dosa</span></div></section>

      <section id="contact" className="final-section section-shell"><div><p className="eyebrow">Your table is waiting</p><h2>Come for the dosa.<br /><em>Stay for the tradition.</em></h2></div><div className="final-side"><p>Find your next favourite breakfast, bring someone you love, and make a morning of it.</p><a className="solid-link" href="tel:+918151999191">Find a table <ArrowUpRight size={17} /></a></div></section>

      <section className="contact-section"><div className="section-shell contact-grid"><div className="contact-copy"><p className="eyebrow">Got questions?</p><h2>We have<br /><em>chutney.</em></h2><div className="contact-details"><a href="tel:+918151999191"><Phone size={19} /><span>Call us<br /><strong>+91 81519 99191</strong></span></a><a href="mailto:hello@davangiriloni.com"><Mail size={19} /><span>Write to us<br /><strong>hello@davangiriloni.com</strong></span></a><div><MapPin size={19} /><span>Visit us<br /><strong>Jayanagar, Bengaluru</strong></span></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><h3>Say hello.</h3><label>Name<input required name="name" placeholder="Your full name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={3} placeholder="Tell us what is on your mind..." /></label><button type="submit">{sent ? <><Check size={17} /> Message sent</> : <>Send it over <ArrowUpRight size={17} /></>}</button>{sent && <p className="form-note" role="status">Thank you. We will get back to you shortly.</p>}</form></div></section>

      <footer className="site-footer"><div className="section-shell footer-top"><a className="footer-brand" href="#top"><img src={images.logo} alt="Davangiri Loni Dosa" /></a><div className="footer-links"><div><p className="eyebrow">Explore</p><a href="#story">Our story</a><a href="#tradition">Tradition</a><a href="#tawa">The tawa</a></div><div><p className="eyebrow">Say hello</p><a href="https://instagram.com" aria-label="Instagram"><Camera size={17} /> Instagram</a><a href="https://youtube.com" aria-label="YouTube"><CirclePlay size={17} /> YouTube</a></div></div></div><div className="section-shell footer-bottom"><span>© 2026 Davangiri Loni Dosa</span><span>Made with ghee & good intentions</span><a href="#top">Back to top <ArrowUpRight size={15} /></a></div></footer>
    </main>
  )
}
