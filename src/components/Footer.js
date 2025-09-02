'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-nordic-900 text-white">
      <div className="container-nordic py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-nordic-400 text-sm">
            © 2025 par Ilyesse
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/mentions-legales" className="text-nordic-300 hover:text-accent-400 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-cookies" className="text-nordic-300 hover:text-accent-400 transition-colors duration-200">
              Politique de cookies
            </Link>
            <Link href="/politique-confidentialite" className="text-nordic-300 hover:text-accent-400 transition-colors duration-200">
              Politique de confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="text-nordic-300 hover:text-accent-400 transition-colors duration-200">
              Conditions Générales d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
