# Images des Industries - Section "Champs d'Action"

Ce dossier contient les images utilisées dans la section "Champs d'Action" de la page d'accueil.

## Images utilisées (fichiers AVIF) :

### 1. `gas.avif` ✅
- **Usage** : Logo/Image pour l'industrie Oil & Gas
- **Emplacement** : `/images/industries/gas.avif`
- **Format** : AVIF (format moderne et optimisé)
- **Description** : Représente l'industrie pétrolière et gazière

### 2. `nucleaire.avif` ✅
- **Usage** : Logo/Image pour l'industrie Nucléaire
- **Emplacement** : `/images/industries/nucleaire.avif`
- **Format** : AVIF (format moderne et optimisé)
- **Description** : Représente l'industrie nucléaire

### 3. `energy.avif` ✅
- **Usage** : Logo/Image pour l'industrie des Énergies Renouvelables
- **Emplacement** : `/images/industries/energy.avif`
- **Format** : AVIF (format moderne et optimisé)
- **Description** : Représente les énergies renouvelables (éolien, solaire, hydraulique)

## Section Solutions (fichiers AVIF) :

### 1. `inspection.avif` ✅
- **Usage** : Image pour l'Inspection Industrielle
- **Emplacement** : `/images/solutions/inspection.avif`
- **Format** : AVIF

### 2. `cnd.avif` ✅
- **Usage** : Image pour le Contrôle Non-Destructif
- **Emplacement** : `/images/solutions/cnd.avif`
- **Format** : AVIF

### 3. `assistance.avif` ✅
- **Usage** : Image pour l'Assistance Technique
- **Emplacement** : `/images/solutions/assistance.avif`
- **Format** : AVIF

## Avantages du format AVIF :
- **Compression supérieure** : Taille de fichier réduite de 30-50% par rapport au JPEG
- **Qualité optimale** : Meilleure qualité visuelle à taille de fichier équivalente
- **Support moderne** : Compatible avec tous les navigateurs récents
- **Performance** : Chargement plus rapide des images

## Notes techniques :
- **Section Industries** : Images 192x160px (w-48 h-40) - agrandies pour plus d'impact
- **Section Solutions** : Images 224x224px (w-56 h-56) - agrandies pour plus de visibilité
- Les images sont automatiquement redimensionnées et optimisées par Next.js
- Plus de fallback avec icônes emoji - les images sont toujours visibles
- Les images utilisent `object-cover` pour maintenir leurs proportions
- Les fichiers AVIF sont déjà optimisés et prêts à l'emploi

## ⚠️ **Important** :
- **Section Industries** : Contenu statique affiché sur la page d'accueil (non géré depuis l'admin)
- **Section Solutions** : Contenu statique affiché sur la page d'accueil (non géré depuis l'admin)
- Ces sections sont maintenant des éléments de présentation fixes du site
- Pour modifier le contenu, éditez directement le fichier `frontend/src/app/page.js`
