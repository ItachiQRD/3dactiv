'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [solutionsTimeout, setSolutionsTimeout] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      setIsVisible(scrollY > 100) // Apparaît après 100px de scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour gérer l'ouverture du menu Solutions
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout) {
      clearTimeout(solutionsTimeout)
      setSolutionsTimeout(null)
    }
    setIsSolutionsOpen(true)
  }

  // Fonction pour gérer la fermeture du menu Solutions avec délai
  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsOpen(false)
    }, 200) // Délai de 200ms
    setSolutionsTimeout(timeout)
  }

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Histoire', href: '/histoire' },
    { name: 'Industries', href: '/industries' },
    { 
      name: 'Solutions', 
      href: '#solutions',
      submenu: [
        { name: 'Inspection', href: '/solutions/inspection' },
        { name: 'Contrôle Non-Destructif', href: '/solutions/controle-non-destructif' },
        { name: 'Assistance Technique', href: '/solutions/assistance-technique' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-full opacity-0'
    } ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-nordic border-b border-nordic-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-nordic">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo-3dactiv.png" 
              alt="3DACTIV Logo" 
              className="h-16 w-auto"
            />
            <span 
              className="text-xl font-bold text-nordic-900 font-logo"
            >
              3DACTIV
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="text-nordic-700 hover:text-accent-600 font-medium transition-colors duration-200 cursor-pointer flex items-center space-x-1"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-nordic-700 hover:text-accent-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                )}
                
                {/* Solutions Dropdown */}
                {item.submenu && isSolutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-nordic-100 py-2 z-50 transition-all duration-200"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-nordic-700 hover:bg-nordic-50 hover:text-accent-600 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/emplois" className="px-3 py-1.5 text-sm border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white font-medium rounded-md transition-all duration-200">
              Search Jobs
            </Link>
            <Link href="/admin" className="px-3 py-1.5 text-sm bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md transition-all duration-200">
              Espace Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-nordic-700 hover:bg-nordic-100 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-nordic-100 shadow-nordic-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="text-nordic-700 font-medium py-2">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-nordic-600 hover:text-accent-600 font-medium py-1 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-nordic-700 hover:text-accent-600 font-medium py-2 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-nordic-100 space-y-2">
                <Link href="/emplois" className="px-3 py-1.5 text-sm border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white font-medium rounded-md transition-all duration-200 w-full text-center block">
                  Search Jobs
                </Link>
                <Link href="/admin" className="px-3 py-1.5 text-sm bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md transition-all duration-200 w-full text-center block">
                  Espace Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
