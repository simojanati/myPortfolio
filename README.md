# Portfolio — Mohammed Janati Idrissi

Portfolio personnel built with **React + Vite**, deployed on **GitHub Pages**.

🔗 Live: https://simojanati.github.io/myPortfolio/

## Structure
```
myPortfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── data.js              ← toutes les infos (experiences, skills...)
│   ├── assets/
│   │   ├── photo.png
│   │   └── logo.png
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── BgOrbs.jsx
│       └── Icons.jsx
├── public/
│   └── favicon.png
├── index.html
├── vite.config.js
└── package.json
```

## Deploy — 3 étapes

### 1. Première fois (setup)
```bash
# Clone ou init le repo
git init
git remote add origin https://github.com/simojanati/myPortfolio.git

# Install
npm install

# Push
git add .
git commit -m "initial portfolio"
git push -u origin main
```

### 2. GitHub Settings
- Aller dans **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **gh-pages** → **(root)**
- Save ✅

### 3. Après chaque modification
```bash
git add .
git commit -m "update portfolio"
git push
# GitHub Actions se déclenche automatiquement → deploy en ~2 min
```

## Développement local
```bash
npm install
npm run dev
# → http://localhost:5173/myPortfolio/
```

## Modifier le contenu
Tout le contenu (expériences, projets, skills...) est dans **`src/data.js`** — modifier ce fichier uniquement.
