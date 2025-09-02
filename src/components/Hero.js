'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import AssetPath from './AssetPath'

const Hero = () => {
  const videoRef = useRef(null)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "Driven by Excellence",
    "Defined by Expertise", 
    "Delivering Energy Solutions"
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video autoplay prevented'))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length)
    }, 2500) // Change toutes les 2.5 secondes
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <AssetPath src="/videos/hero-background.mp4" type="video/mp4" />
          <AssetPath src="/videos/hero-background.webm" type="video/webm" />
        </video>
        

      </div>

      {/* Text Animation */}
      <div className="absolute bottom-12 left-0 right-0 z-10 w-full">
        <div className="transition-all duration-1000 ease-in-out">
          <h1 
            key={currentPhrase}
            className="text-white text-center font-light tracking-[0.15em] uppercase text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed w-full px-8 animate-fade-in" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {phrases[currentPhrase]}
          </h1>
        </div>
      </div>

      {/* Play Button Overlay for Mobile */}
      <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
          <Play className="w-8 h-8 text-white ml-1" />
        </button>
      </div>
    </section>
  )
}

export default Hero
