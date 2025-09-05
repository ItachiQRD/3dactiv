import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Presentation from '../components/Presentation'
import Industries from '../components/Industries'
import Histoire from '../components/Histoire'
import Solutions from '../components/Solutions'
import Portfolio from '../components/Portfolio'
import Partenaires from '../components/Partenaires'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DynamicMetadata from '../components/DynamicMetadata'

export const metadata = {
  title: '3DACTIV - Accueil'
}

export default function Home() {
  return (
    <>
      <DynamicMetadata 
        title="3DACTIV - Accueil"
        description="Cabinet de recrutement spécialisé dans l'industrie énergétique : gaz, nucléaire et renouvelable. Découvrez nos opportunités de carrière."
        keywords="recrutement, énergie, gaz, nucléaire, renouvelable, emploi, carrière"
      />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Industries />
        <Solutions />
        <Histoire />
        <Portfolio />
        <Presentation />
        <Partenaires />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
