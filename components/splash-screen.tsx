'use client'

import { useEffect, useState } from 'react'

const SPLASH_SEEN_KEY = 'davangiri-splash-seen'
const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2843%29-qQsQ3TeytBKHASJw8XKCdDALPQyYac.png'

export function SplashScreen() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem(SPLASH_SEEN_KEY)) return

    setVisible(true)
    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem(SPLASH_SEEN_KEY, 'true')
      setVisible(false)
    }, 2000)

    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="splash-screen" role="status" aria-label="Loading Davangiri Loni Dosa">
      <img className="splash-screen-logo" src={LOGO_URL} alt="Davangiri Loni Dosa — Dosa Coffee Love" />
    </div>
  )
}
