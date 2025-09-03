import { useState, useEffect } from 'react'
import dataManager from '../utils/dataManager'

// Hook personnalisé pour gérer les données avec le DataManager
export const useDataManager = (dataType, filters = {}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadData = () => {
    try {
      setLoading(true)
      setError(null)
      
      let fetchedData = dataManager.getData(dataType)
      
      // Appliquer les filtres si fournis
      if (Object.keys(filters).length > 0) {
        fetchedData = dataManager.filterData(dataType, filters)
      }
      
      setData(fetchedData)
    } catch (err) {
      setError(err.message)
      console.error(`Erreur lors du chargement des données ${dataType}:`, err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys[dataType]) {
        loadData()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [dataType, JSON.stringify(filters)])

  const addItem = (item) => {
    try {
      const newItem = dataManager.addItem(dataType, item)
      loadData() // Recharger les données
      return newItem
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const updateItem = (id, updates) => {
    try {
      const updatedItem = dataManager.updateItem(dataType, id, updates)
      loadData() // Recharger les données
      return updatedItem
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteItem = (id) => {
    try {
      dataManager.deleteItem(dataType, id)
      loadData() // Recharger les données
      return true
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const getItem = (id) => {
    return dataManager.getItem(dataType, id)
  }

  const refresh = () => {
    loadData()
  }

  return {
    data,
    loading,
    error,
    addItem,
    updateItem,
    deleteItem,
    getItem,
    refresh
  }
}

// Hook spécialisé pour les emplois
export const useJobs = (filters = {}) => {
  return useDataManager('jobs', filters)
}

// Hook spécialisé pour les partenaires
export const usePartners = (filters = {}) => {
  return useDataManager('partners', filters)
}

// Hook spécialisé pour les actualités
export const useNews = (filters = {}) => {
  return useDataManager('news', filters)
}

// Hook spécialisé pour le portfolio
export const usePortfolio = (filters = {}) => {
  return useDataManager('portfolio', filters)
}

// Hook pour les emplois publiés (page publique)
export const usePublishedJobs = (filters = {}) => {
  const { data, loading, error, refresh } = useJobs(filters)
  const publishedJobs = data.filter(job => job.status === 'published')
  
  return {
    data: publishedJobs,
    loading,
    error,
    refresh
  }
}

// Hook pour les partenaires actifs (page publique)
export const useActivePartners = (filters = {}) => {
  const { data, loading, error, refresh } = usePartners(filters)
  const activePartners = data.filter(partner => partner.status === 'active')
  
  return {
    data: activePartners,
    loading,
    error,
    refresh
  }
}

// Hook pour les actualités publiées (page publique)
export const usePublishedNews = (filters = {}) => {
  const { data, loading, error, refresh } = useNews(filters)
  const publishedNews = data.filter(article => article.status === 'published')
  
  return {
    data: publishedNews,
    loading,
    error,
    refresh
  }
}

export default useDataManager
