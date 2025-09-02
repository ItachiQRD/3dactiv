'use client'

import { usePathname } from 'next/navigation'

const AssetPath = ({ src, alt, className, ...props }) => {
  const pathname = usePathname()
  
  // Si on est en production et que le chemin ne commence pas par /3dactiv
  const isProduction = process.env.NODE_ENV === 'production'
  const needsPrefix = isProduction && !src.startsWith('/3dactiv')
  
  const finalSrc = needsPrefix ? `/3dactiv${src}` : src
  
  if (src.endsWith('.mp4') || src.endsWith('.webm')) {
    return (
      <source src={finalSrc} {...props} />
    )
  }
  
  return (
    <img src={finalSrc} alt={alt} className={className} {...props} />
  )
}

export default AssetPath
