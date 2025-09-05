import NewsArticleClient from '../../../components/NewsArticleClient'

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  // Cette fonction est requise pour Next.js avec output: export
  // Elle retourne un tableau vide car nous utilisons des routes dynamiques côté client
  return []
}

const NewsArticle = () => {
  return <NewsArticleClient />
}

export default NewsArticle
