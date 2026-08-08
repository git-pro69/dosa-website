'use client'

import { useState } from 'react'
import { ArrowUpRight, Camera, ChevronDown, CirclePlay, Menu as MenuIcon, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2844%29-OipTcMgxONCwn8v6T3YLdsZKiyQYlB.png'
const dosa = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jfPnRqnThQ5Fyj862D8FR5cvkfVbys.png'
const leafyArtwork = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2842%29-V9TFZ6tQNEmNr9NDUL36iv20orISWZ.png'

const menuItems = [
  ['लोणी डोसा', 'Loni Dosa', '₹90/-', 'Dosa'],
  ['स्पंज डोसा', 'Sponge Dosa', '₹90/-', 'Dosa'],
  ['लोणी स्पंज डोसा', 'Loni Sponge Dosa', '₹120/-', 'Dosa'],
  ['ताटी इडली', 'Tati Idali', '₹60/-', 'Idli & Vada'],
  ['उडिद वडा', 'Ud id Vada', '₹60/-', 'Idli & Vada'],
  ['शाहूण खिचडी (उपासासाठी विशेष)', 'Shabu Danu Khichadi', '₹40/-', 'Specials'],
  ['कॉफी', 'Coffee', '₹30/-', 'Beverages'],
] as const
const categories = ['All', 'Dosa', 'Idli & Vada', 'Specials', 'Beverages']

export default function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const items = menuItems.filter((item) => activeCategory === 'All' || item[3] === activeCategory)
  return <main className="menu-page">
    <header className="site-header"><a className="brand-mark" href="/" aria-label="Davangiri Loni Dosa home"><img src={logo} alt="Davangiri Loni Dosa" /></a><nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation"><a href="/#story">Our story</a><a href="/about">About</a><a href="/menu">Menu</a><a href="/#locations">Locations</a><a href="/#contact">Contact</a><a className="nav-cta" href="/#contact">Find a table <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <MenuIcon size={21} />}</button></header>
    <section className="menu-reference-hero" aria-label="Davangiri Loni Dosa introduction"><img className="menu-reference-art" src={leafyArtwork} alt="" aria-hidden="true" /><div className="menu-reference-copy"><h1>Warning:<br /><em>Cravings Ahead</em></h1></div></section>
    <section className="menu-feature section-shell"><div className="menu-feature-media"><img src={dosa} alt="Crisp Loni Dosa served fresh from the tawa" /></div><div className="menu-feature-copy"><p className="eyebrow">Our signature</p><h2>That first bite<br /><em>stays with you.</em></h2><p>Our Loni Dosa is thin, crisp, buttery, and made the Davangiri way. Pair it with a hot coffee and settle in.</p><a className="text-link" href="#menu-list">See all dishes <ArrowUpRight size={17} /></a></div></section>
    <section id="menu-list" className="menu-list-section"><div className="section-shell"><div className="section-heading menu-list-heading"><div><p className="eyebrow">Good food, fair prices</p><h2>What&apos;s<br /><em>on the tawa.</em></h2></div><p>Vegetarian kitchen · fresh all day</p></div><div className="menu-category-nav" aria-label="Menu categories">{categories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'is-active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="menu-list" role="list">{items.map((item) => <article className="menu-row" role="listitem" key={item[1]}><div><span className="menu-row-category">{item[3]}</span><h3>{item[0]}</h3><p>{item[1]}</p></div><strong>{item[2]}</strong></article>)}</div></div></section>
    <section className="menu-cta"><div className="section-shell"><p className="eyebrow">Come hungry</p><h2>There&apos;s always<br /><em>room for one more.</em></h2><a className="hero-button" href="/#contact">Find a table <ArrowUpRight size={18} /></a></div></section>
    <footer className="site-footer"><div className="section-shell footer-top"><a className="footer-brand" href="/"><img src={logo} alt="Davangiri Loni Dosa" /></a><div className="footer-links"><div><p className="eyebrow">Explore</p><a href="/about">Our story</a><a href="/menu">Menu</a><a href="/#locations">Locations</a></div><div><p className="eyebrow">Say hello</p><a href="https://instagram.com"><Camera size={18} /> Instagram</a><a href="https://youtube.com"><CirclePlay size={18} /> YouTube</a></div></div></div><div className="section-shell footer-bottom"><span>© 2026 Davangiri Loni Dosa</span><span>Made with ghee &amp; good intentions</span><a href="#top">Back to top <ChevronDown size={15} className="rotate-180" /></a></div></footer>
  </main>
}
