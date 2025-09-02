# 🚀 3DACTIV - Site de Recrutement Énergétique

Site web moderne et minimaliste pour le cabinet de recrutement 3DACTIV, spécialisé dans l'industrie énergétique (gaz, nucléaire, renouvelable).

## ✨ Caractéristiques

- **Design Scandinave** : Style minimaliste et épuré
- **Responsive** : Optimisé pour tous les appareils
- **Performance** : Animations fluides avec Framer Motion
- **CMS Intégré** : Gestion des emplois, candidatures, portfolio et partenaires
- **Base de données** : SQLite avec Prisma ORM

## 🎨 Style & Design

### Palette de Couleurs (Nordic Clean)
- **Blanc** : #FFFFFF
- **Gris très clair** : #F8F9FA
- **Bleu-gris** : #6B7280
- **Noir doux** : #111827
- **Accent bleu** : #3B82F6

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Système d'espacement** : 8px (8, 16, 24, 32, 48, 64, 96px)

## 🏗️ Architecture

```
3dactiv-website/
├── 📁 src/
│   ├── 📁 app/ (Next.js App Router)
│   ├── 📁 components/ (Composants réutilisables)
│   └── 📁 styles/ (CSS global)
├── 📁 public/ (Ressources statiques)
├── 📁 prisma/ (Schéma de base de données)
└── 📁 package.json
```

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd 3dactiv-website

# Installer les dépendances
npm install

# Configurer la base de données
npm run db:generate
npm run db:push

# Démarrer en mode développement
npm run dev
```

### Scripts Disponibles
- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Build de production
- `npm run start` : Démarre le serveur de production
- `npm run db:generate` : Génère le client Prisma
- `npm run db:push` : Synchronise la base de données
- `npm run db:studio` : Ouvre Prisma Studio

## 📱 Pages & Sections

### Page d'Accueil
1. **Hero** : Vidéo en arrière-plan avec overlay
2. **Présentation** : Image avec texte superposé
3. **Industries** : Gaz, Nucléaire, Renouvelable
4. **Histoire** : Notre parcours
5. **Solutions** : Nos services
6. **Portfolio** : Nos réalisations
7. **Actualités** : Dernières nouvelles
8. **Partenaires** : Logos des collaborateurs
9. **Contact** : Formulaire de contact

### Espace Admin
- Gestion des emplois
- Consultation des candidatures
- Modification du portfolio
- Gestion des partenaires

## 🎯 Fonctionnalités

### Frontend
- Navigation sticky avec effet de transparence
- Animations au scroll avec Framer Motion
- Design responsive mobile-first
- Composants réutilisables

### Backend
- API Routes Next.js
- Base de données SQLite
- ORM Prisma
- Authentification JWT

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Base de données** : SQLite + Prisma
- **Icons** : Lucide React
- **Formulaires** : React Hook Form

## 📁 Structure des Composants

- `Navigation.js` : Navigation principale avec menu mobile
- `Hero.js` : Section hero avec vidéo
- `Presentation.js` : Section présentation avec image
- `Industries.js` : Grille des secteurs d'expertise

## 🎨 Personnalisation

### Modifier les Couleurs
Éditer `tailwind.config.js` pour changer la palette Nordic Clean.

### Ajouter des Sections
Créer de nouveaux composants dans `src/components/` et les importer dans `page.js`.

### Modifier le CMS
Éditer le schéma Prisma dans `prisma/schema.prisma`.

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
# Déployer sur Vercel
```

### Autres Plateformes
```bash
npm run build
npm run start
```

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.

---

**3DACTIV** - Recrutement dans l'Industrie Énergétique 🏭⚡
