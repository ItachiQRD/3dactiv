// Gestionnaire de données local avec localStorage
class DataManager {
  constructor() {
    this.storageKeys = {
      jobs: '3dactiv_jobs',
      partners: '3dactiv_partners',
      news: '3dactiv_news',
      portfolio: '3dactiv_portfolio',
      applications: '3dactiv_applications'
    }
    
    // Initialiser les données par défaut si elles n'existent pas (seulement côté client)
    if (typeof window !== 'undefined') {
      this.initializeDefaultData()
    }
  }

  // Initialiser les données par défaut
  initializeDefaultData() {
    // Données par défaut pour les emplois
    if (!this.getData('jobs')) {
      const defaultJobs = [
        {
          id: 1,
          title: 'Ingénieur CND',
          company: 'EDF',
          location: 'Paris, France',
          type: 'CDI',
          salary: '45 000 - 55 000 €',
          description: 'Nous recherchons un ingénieur CND expérimenté pour rejoindre notre équipe technique. Vous serez responsable des inspections non destructives sur nos installations.',
          requirements: 'Master en ingénierie, 3+ ans d\'expérience en CND, certification ASNT niveau II',
          benefits: 'Mutuelle, tickets restaurant, 13ème mois, formation continue',
          status: 'published',
          publishedAt: '2024-01-15',
          deadline: '2024-03-15',
          applications: 12,
          createdAt: '2024-01-15'
        },
        {
          id: 2,
          title: 'Technicien Inspection',
          company: 'ENGIE',
          location: 'Lyon, France',
          type: 'CDD',
          salary: '35 000 - 42 000 €',
          description: 'Poste de technicien inspection pour missions sur sites industriels. Vous interviendrez sur différents types d\'équipements.',
          requirements: 'BTS/DUT technique, 2+ ans d\'expérience, permis B obligatoire',
          benefits: 'Prime de déplacement, véhicule de service, formation',
          status: 'published',
          publishedAt: '2024-01-20',
          deadline: '2024-02-28',
          applications: 8,
          createdAt: '2024-01-20'
        },
        {
          id: 3,
          title: 'Chef de Projet Nucléaire',
          company: 'AREVA',
          location: 'Marseille, France',
          type: 'CDI',
          salary: '60 000 - 75 000 €',
          description: 'Direction de projets dans le secteur nucléaire civil. Vous coordonnerez les équipes et assurerez le suivi des projets.',
          requirements: 'Master/Ingénieur, 5+ ans d\'expérience, anglais courant',
          benefits: 'Participation, intéressement, télétravail partiel',
          status: 'published',
          publishedAt: '2024-02-01',
          deadline: '2024-04-30',
          applications: 5,
          createdAt: '2024-02-01'
        }
      ]
      this.setData('jobs', defaultJobs)
    }

         // Données par défaut pour les partenaires
     if (!this.getData('partners')) {
       const defaultPartners = [
         {
           id: 1,
           name: 'EDF',
           logo: '/images/partners/edf-logo.png',
           status: 'active',
           createdAt: '2024-01-15'
         },
         {
           id: 2,
           name: 'ENGIE',
           logo: '/images/partners/engie-logo.png',
           status: 'active',
           createdAt: '2024-01-20'
         },
         {
           id: 3,
           name: 'AREVA',
           logo: '/images/partners/areva-logo.png',
           status: 'active',
           createdAt: '2024-02-01'
         }
       ]
       this.setData('partners', defaultPartners)
     }

    // Données par défaut pour les actualités
    if (!this.getData('news')) {
      const defaultNews = [
        {
          id: 1,
          title: 'Nouveaux défis de la transition énergétique en 2024',
          excerpt: 'Analyse des enjeux et opportunités de la transition énergétique dans le secteur industriel français.',
          content: 'La transition énergétique représente un défi majeur pour l\'industrie française en 2024. Avec l\'objectif de neutralité carbone d\'ici 2050, les entreprises du secteur énergétique doivent adapter leurs processus et former leurs équipes aux nouvelles technologies. 3D ACTIV s\'engage activement dans cette transformation en proposant des solutions d\'inspection et de maintenance adaptées aux énergies renouvelables.',
          category: 'industry',
          author: 'Marie Dubois',
          imageUrl: '/images/news/transition-energetique.jpg',
          tags: 'transition énergétique, industrie, 2024, neutralité carbone',
          status: 'published',
          publishDate: '2024-01-20',
          readTime: '5 min',
          views: 1247,
          createdAt: '2024-01-20'
        },
        {
          id: 2,
          title: 'Innovations technologiques en CND : vers l\'inspection 4.0',
          excerpt: 'Découvrez les dernières innovations en contrôle non-destructif qui révolutionnent l\'inspection industrielle.',
          content: 'L\'industrie 4.0 transforme également le secteur du contrôle non-destructif. Les nouvelles technologies d\'inspection, intégrant l\'intelligence artificielle et la réalité augmentée, permettent une détection plus précise des défauts et une maintenance prédictive. 3D ACTIV investit massivement dans ces technologies pour offrir à ses clients les services d\'inspection les plus avancés du marché.',
          category: 'technology',
          author: 'Pierre Martin',
          imageUrl: '/images/news/cnd-innovation.jpg',
          tags: 'CND, innovation, industrie 4.0, IA, maintenance prédictive',
          status: 'published',
          publishDate: '2024-01-15',
          readTime: '4 min',
          views: 892,
          createdAt: '2024-01-15'
        },
        {
          id: 3,
          title: '3D ACTIV obtient la certification ISO 9712 niveau III',
          excerpt: 'Notre équipe de techniciens CND a obtenu la certification internationale la plus élevée en contrôle non-destructif.',
          content: 'Nous sommes fiers d\'annoncer que 3D ACTIV a obtenu la certification ISO 9712 niveau III, la plus haute certification internationale en contrôle non-destructif. Cette certification atteste de notre expertise technique et de notre capacité à mener des inspections complexes sur les installations les plus critiques. Nos clients bénéficient ainsi de la garantie d\'un service d\'inspection de niveau international.',
          category: 'company',
          author: 'Sophie Leroy',
          imageUrl: '/images/news/certification-iso.jpg',
          tags: 'certification, ISO 9712, CND, expertise, qualité',
          status: 'published',
          publishDate: '2024-01-10',
          readTime: '3 min',
          views: 1563,
          createdAt: '2024-01-10'
        }
      ]
      this.setData('news', defaultNews)
    }

    // Données par défaut pour le portfolio
    if (!this.getData('portfolio')) {
      const defaultPortfolio = [
        {
          id: 1,
          title: 'Inspection CND - Centrale Nucléaire Flamanville',
          description: 'Inspection complète des soudures et structures de la centrale nucléaire de Flamanville, incluant contrôle ultrasonique, radiographique et magnétoscopique. Détection de 3 défauts critiques, maintenance préventive planifiée, conformité aux normes ASME et RCC-M validée.',
          imageUrl: '/images/portfolio/nuclear-inspection.jpg',
          category: 'nuclear',
          createdAt: '2024-01-15'
        },
        {
          id: 2,
          title: 'Maintenance Plateforme Offshore TotalEnergies',
          description: 'Maintenance préventive et inspection des équipements de production offshore, incluant inspection des pipelines et structures sous-marines. Extension de la durée de vie de 5 ans, réduction des coûts de maintenance de 25%, zéro incident de sécurité.',
          imageUrl: '/images/portfolio/offshore-maintenance.jpg',
          category: 'oil-gas',
          createdAt: '2024-01-10'
        },
        {
          id: 3,
          title: 'Supervision Parc Éolien Offshore',
          description: 'Supervision complète de la construction et mise en service d\'un parc éolien offshore de 500 MW, incluant contrôle qualité et sécurité. Construction dans les délais, respect des normes environnementales, formation de l\'équipe locale.',
          imageUrl: '/images/portfolio/wind-farm.jpg',
          category: 'renewable',
          createdAt: '2024-01-05'
        }
      ]
      this.setData('portfolio', defaultPortfolio)
    }

    // Données par défaut pour les candidatures (vide au début)
    if (!this.getData('applications')) {
      this.setData('applications', [])
    }
  }

  // Récupérer des données
  getData(type) {
    try {
      // Vérifier si on est côté serveur
      if (typeof window === 'undefined') {
        return []
      }
      const data = localStorage.getItem(this.storageKeys[type])
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error(`Erreur lors de la récupération des données ${type}:`, error)
      return []
    }
  }

  // Sauvegarder des données
  setData(type, data) {
    try {
      // Vérifier si on est côté serveur
      if (typeof window === 'undefined') {
        return false
      }
      localStorage.setItem(this.storageKeys[type], JSON.stringify(data))
      return true
    } catch (error) {
      console.error(`Erreur lors de la sauvegarde des données ${type}:`, error)
      return false
    }
  }

  // Ajouter un élément
  addItem(type, item) {
    const data = this.getData(type)
    const newItem = {
      ...item,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    }
    data.unshift(newItem)
    this.setData(type, data)
    return newItem
  }

  // Modifier un élément
  updateItem(type, id, updates) {
    const data = this.getData(type)
    const index = data.findIndex(item => item.id === id)
    if (index !== -1) {
      data[index] = {
        ...data[index],
        ...updates,
        updatedAt: new Date().toISOString().split('T')[0]
      }
      this.setData(type, data)
      return data[index]
    }
    return null
  }

  // Supprimer un élément
  deleteItem(type, id) {
    const data = this.getData(type)
    const filteredData = data.filter(item => item.id !== id)
    this.setData(type, filteredData)
    return true
  }

  // Récupérer un élément par ID
  getItem(type, id) {
    const data = this.getData(type)
    return data.find(item => item.id === id) || null
  }

  // Filtrer les données
  filterData(type, filters = {}) {
    let data = this.getData(type)
    
    // Filtres par statut
    if (filters.status) {
      data = data.filter(item => item.status === filters.status)
    }
    
    // Filtres par recherche textuelle
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      data = data.filter(item => {
        return Object.values(item).some(value => 
          typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        )
      })
    }
    
    // Filtres par catégorie
    if (filters.category) {
      data = data.filter(item => item.category === filters.category)
    }
    
    // Filtres par secteur
    if (filters.sector) {
      data = data.filter(item => item.sector === filters.sector)
    }
    
    return data
  }

  // Gestion des images uploadées
  saveUploadedImage(file, type = 'general') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageData = {
          id: Date.now(),
          name: file.name,
          type: file.type,
          size: file.size,
          data: e.target.result,
          uploadDate: new Date().toISOString(),
          category: type
        }
        
        // Sauvegarder l'image dans localStorage
        const images = this.getData('uploadedImages') || []
        images.push(imageData)
        this.setData('uploadedImages', images)
        
        resolve(imageData)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  // Récupérer une image uploadée
  getUploadedImage(id) {
    const images = this.getData('uploadedImages') || []
    return images.find(img => img.id === id) || null
  }

  // Supprimer une image uploadée
  deleteUploadedImage(id) {
    const images = this.getData('uploadedImages') || []
    const filteredImages = images.filter(img => img.id !== id)
    this.setData('uploadedImages', filteredImages)
    return true
  }

  // Nettoyer les images orphelines
  cleanupOrphanedImages() {
    const images = this.getData('uploadedImages') || []
    const jobs = this.getData('jobs')
    const partners = this.getData('partners')
    const news = this.getData('news')
    const portfolio = this.getData('portfolio')
    
    const allData = [...jobs, ...partners, ...news, ...portfolio]
    const usedImageIds = new Set()
    
    // Collecter tous les IDs d'images utilisées
    allData.forEach(item => {
      if (item.imageUrl && item.imageUrl.startsWith('data:')) {
        // Extraire l'ID de l'image depuis l'URL data
        const match = item.imageUrl.match(/data:image\/[^;]+;base64,/)
        if (match) {
          // Pour simplifier, on garde toutes les images pour l'instant
          // Dans un vrai système, on ferait une correspondance plus précise
        }
      }
    })
    
    // Supprimer les images non utilisées (logique simplifiée)
    // Pour l'instant, on garde toutes les images
  }

  // Exporter toutes les données
  exportData() {
    const allData = {}
    Object.keys(this.storageKeys).forEach(key => {
      allData[key] = this.getData(key)
    })
    return allData
  }

  // Importer des données
  importData(data) {
    Object.keys(data).forEach(key => {
      if (this.storageKeys[key]) {
        this.setData(key, data[key])
      }
    })
  }

  // Réinitialiser toutes les données
  resetAllData() {
    Object.keys(this.storageKeys).forEach(key => {
      localStorage.removeItem(this.storageKeys[key])
    })
    localStorage.removeItem('3dactiv_uploadedImages')
    this.initializeDefaultData()
  }
}

// Instance singleton
const dataManager = new DataManager()

export default dataManager
