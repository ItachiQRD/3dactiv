# Dossier des images uploadées

Ce dossier contient toutes les images uploadées via l'interface d'administration.

## Structure des fichiers

Les images sont nommées avec le format : `upload-{timestamp}.{extension}`

Exemple : `upload-1704067200000.jpg`

## Types de fichiers acceptés

- **Images** : JPG, JPEG, PNG, GIF, WebP
- **Taille maximale** : 5MB par fichier

## Utilisation

1. Accédez à l'interface d'administration
2. Créez ou modifiez un article/projet
3. Utilisez le composant d'upload d'image
4. Glissez-déposez ou cliquez pour sélectionner une image
5. L'image sera automatiquement nommée et sauvegardée

## Sécurité

- Validation du type de fichier
- Limitation de la taille
- Noms de fichiers uniques pour éviter les conflits

## Déploiement

Les images de ce dossier sont automatiquement copiées lors du déploiement sur GitHub Pages ou OVH.
