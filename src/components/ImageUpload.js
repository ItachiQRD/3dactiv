'use client'

import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { validateFile } from './FileUploadHandler'
import dataManager from '../utils/dataManager'

const ImageUpload = ({ 
  value, 
  onChange, 
  label = "Image", 
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB
  className = ""
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = async (file) => {
    if (!file) return

    // Validation du fichier
    const validation = validateFile(file, { maxSize })
    if (!validation.isValid) {
      setError(validation.errors[0])
      return
    }

    setError('')
    setIsUploading(true)

    try {
      // Sauvegarder l'image avec le DataManager
      const imageData = await dataManager.saveUploadedImage(file, 'admin')
      
      // Utiliser l'URL data pour l'affichage
      const imageUrl = imageData.data
      onChange(imageUrl)
      
    } catch (error) {
      setError('Erreur lors de l\'upload de l\'image')
      console.error('Upload error:', error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleRemoveImage = () => {
    onChange('')
    setError('')
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      {value ? (
        // Image sélectionnée
        <div className="relative group">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Image non trouvée</p>
              </div>
            </div>
            
            {/* Bouton de suppression */}
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-600 truncate flex-1 mr-2">
              {value}
            </p>
            <button
              type="button"
              onClick={openFileDialog}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Changer
            </button>
          </div>
        </div>
      ) : (
        // Zone d'upload
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
            isDragging
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          } ${isUploading ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={openFileDialog}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileInputChange}
            className="hidden"
          />
          
          <div className="space-y-3">
            {isUploading ? (
              <div className="flex flex-col items-center space-y-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="text-sm text-gray-600 text-center">
                  Upload en cours...
                </p>
              </div>
            ) : (
              <>
                <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-blue-600">Cliquez pour sélectionner</span> ou glissez-déposez
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF jusqu'à {maxSize / (1024 * 1024)}MB
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default ImageUpload
