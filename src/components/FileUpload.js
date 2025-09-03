'use client'

import { useState, useRef } from 'react'
import { Upload, X, FileText, File, FileImage } from 'lucide-react'
import dataManager from '../utils/dataManager'

const FileUpload = ({ 
  value, 
  onChange, 
  label = "Fichier", 
  accept = ".pdf,.doc,.docx,.txt,image/*",
  maxSize = 10 * 1024 * 1024, // 10MB
  className = ""
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  const validateFile = (file) => {
    const errors = []
    
    // Vérifier la taille
    if (file.size > maxSize) {
      errors.push(`Le fichier est trop volumineux. Taille maximale : ${maxSize / (1024 * 1024)}MB`)
    }
    
    // Vérifier le type de fichier
    const allowedTypes = accept.split(',').map(type => type.trim())
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase()
    const mimeType = file.type.toLowerCase()
    
    const isAllowed = allowedTypes.some(type => {
      if (type.startsWith('.')) {
        return fileExtension === type
      } else if (type.includes('/*')) {
        const baseType = type.split('/')[0]
        return mimeType.startsWith(baseType)
      }
      return mimeType === type
    })
    
    if (!isAllowed) {
      errors.push(`Type de fichier non autorisé. Types acceptés : ${accept}`)
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }

  const handleFileSelect = async (file) => {
    if (!file) return

    // Validation du fichier
    const validation = validateFile(file)
    if (!validation.isValid) {
      setError(validation.errors[0])
      return
    }

    setError('')
    setIsUploading(true)

    try {
      // Convertir le fichier en base64
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })

      // Sauvegarder l'image dans le dataManager
      const imageId = dataManager.saveUploadedImage(base64, file.name)
      
      onChange(base64)
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error)
      setError('Erreur lors de l\'upload du fichier')
    } finally {
      setIsUploading(false)
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

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    onChange('')
    setError('')
  }

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase()
    switch (extension) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />
      case 'doc':
      case 'docx':
        return <File className="w-8 h-8 text-blue-500" />
      case 'txt':
        return <FileText className="w-8 h-8 text-gray-500" />
      default:
        if (fileName.startsWith('data:image/')) {
          return <FileImage className="w-8 h-8 text-green-500" />
        }
        return <File className="w-8 h-8 text-gray-500" />
    }
  }

  const getFileName = (value) => {
    if (value.startsWith('data:')) {
      // Extraire le nom du fichier depuis le data URL si possible
      const match = value.match(/filename=([^;]+)/)
      return match ? match[1] : 'Fichier uploadé'
    }
    return value
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      {value ? (
        // Fichier sélectionné
        <div className="relative group">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            {value.startsWith('data:image/') ? (
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
                {getFileIcon(value)}
                <p className="text-sm text-gray-600 mt-2 text-center px-4">
                  {getFileName(value)}
                </p>
              </div>
            )}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Fichier non trouvé</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              title="Supprimer le fichier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={openFileDialog}
            className="mt-2 w-full btn-secondary text-sm"
          >
            Changer le fichier
          </button>
        </div>
      ) : (
        // Zone de drag & drop
        <div
          className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
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
                    {accept.split(',').map(a => a.replace('.', '.').replace('image/*', 'Images')).join(', ')} (max {maxSize / (1024 * 1024)}MB)
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}

export default FileUpload
