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
    
    // Initialiser les données par défaut si elles n'existent pas
    this.initializeDefaultData()
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
          title: 'Transition énergétique : 3D ACTIV s\'engage',
          excerpt: 'Notre entreprise renforce son engagement dans la transition énergétique avec de nouveaux projets d\'énergies renouvelables.',
          content: 'Contenu complet de l\'article...',
          category: 'industry',
          author: 'Marie Dubois',
          imageUrl: '/images/news/transition-energetique.jpg',
          tags: 'transition énergétique, industrie, 2024, neutralité carbone',
          status: 'published',
          publishDate: '2024-01-15',
          createdAt: '2024-01-15'
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
