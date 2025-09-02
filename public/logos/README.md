# Répertoire des Logos Uploadés

Ce répertoire contient tous les logos des entreprises partenaires uploadés via l'interface d'administration.

## Structure des Fichiers

Les fichiers sont nommés selon le format suivant :
`{nom-entreprise}-{timestamp}.{extension}`

Exemple : `totalenergies-1705312800000.png`

## Formats Supportés

- **Images** : JPG, JPEG, PNG, GIF, WebP
- **Taille maximale** : 5MB
- **Résolution recommandée** : 200x150px minimum

## Sécurité

- Seuls les fichiers image sont acceptés
- Validation de la taille des fichiers
- Noms de fichiers sanitisés pour éviter les injections

## Accès

Les logos sont accessibles publiquement via l'URL :
`/uploads/logos/{nom-fichier}`

## Gestion

- Les logos sont gérés via l'interface d'administration
- Possibilité de supprimer et remplacer les logos
- Sauvegarde automatique des métadonnées
