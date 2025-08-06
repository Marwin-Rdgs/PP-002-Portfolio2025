# PP-002 - Portfolio Marwin Rodrigues

## 🧠 Présentation

**PP-002** est le nom de code du site personnel de Marwin Rodrigues — Business Manager & Entrepreneur.  
Ce site met en avant son parcours professionnel, son profil hybride entre management et développement web, ainsi que son auto-entreprise **Chez Marwin Union**.  
Le site comprend plusieurs sections clés : présentation personnelle, portfolio de projets, contact, et vitrine de l’entreprise et de ses services.

Le projet est construit avec **NuxtJS** pour le framework frontend, et **TailwindCSS** pour le design, dans une optique de performance, d'accessibilité et de SEO.

---

## 📚 Sommaire

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Auteur](#auteur)
- [Licence](#licence)

---

## 🛠️ Installation

### Prérequis

- Node.js v16 ou plus récent
- Git

### Étapes

#### Clonez le projet :

```bash
git clone https://github.com/marwin-rodrigues/PP-002-Portfolio2025.git
cd PP-002-Portfolio2025
```

#### Installez les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

#### Lancez le serveur de développement :

```bash
npm run dev
```
Accédez à l'application : http://localhost:3000

## ▶️ Utilisation

### Commandes utiles

- Développement : ```bash npm run dev```

Build production : ```bash npm run build puis npm run start```

Lint (analyse du code) : ```bash npm run lint```

Prévisualisation production : ```bash npm run preview```

## 🧱 Structure du projet

```bash
PP-002-Portfolio2025/
├── assets/                     # Ressources visuelles et CSS
│   ├── main.css
│   ├── img/
│   └── icon/
├── components/                 # Composants réutilisables
│   ├── cardProject.vue         # Carte de projet du portfolio
│   ├── cardFeedback.vue        # Avis/retours clients, collaborateurs, professeurs
│   ├── calendly.vue            # Pop-up de prise de rendez-vous
│   ├── footernav.vue
│   ├── headnav.vue
│   ├── mail.vue                # Pop-up de confirmation d’envoi
│   ├── politics.vue            # Politique de confidentialité
│   ├── news.vue                # Pop-up annonce de nouveautés
│   ├── legalNotic.vue
│   ├── partner.vue             # Affichage des partenaires
│   ├── FAQ.vue                 # FAQ optimisée SEO
│   ├── cardArticle.vue         # Carte d’article Chez Marwin Union
│   ├── inprogress.vue          # Affichage maintenance
│   ├── tools/                  # Composants outils utilisés dans les projets
│   └── collab/                 # Composants collaborateurs des projets
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── contact.vue
│   ├── chez-marwinUnion/
│   │   ├── index.vue
│   │   ├── chez-marwin-web.vue
│   │   ├── chez-marwin-teamcare.vue
│   │   ├── articles/
│   │   │   ├── index.vue
│   │   │   └── [id].vue
│   │   └── partner/
│   │       ├── index.vue
│   │       └── [id].vue
│   └── project/
│       ├── index.vue
│       └── [id].vue
├── data/                       # Données en JSON
│   ├── CMU-articles.json
│   ├── feedbackIndex.json
│   ├── partner.json
│   └── projectList.json
├── public/
│   ├── icons/
│   └── imgs/
├── serveur/                    # Médias liés à l’auto-entreprise
├── tailwind.config.js
├── nuxt.config.js
└── app.vue
```

## 👤 Auteur
### Marwin Rodrigues

Business Manager & Entrepreneur
📍 Basé entre France & Suisse
🌐 marwin-rodrigues.fr
📧 contact@marwin-rodrigues.fr

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d’informations.
```yaml
💡 Tu peux coller ce contenu directement dans ton `README.md`. Si tu veux l’enrichir avec des badges (ex. : déploiement, framework utilisé), je peux aussi t’en générer. Tu veux une version anglophone aussi ?
```