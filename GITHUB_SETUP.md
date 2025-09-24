# 📖 Guide d'importation GoBot vers GitHub

## Étape 1 : Installer Git

### Option A : Télécharger Git
1. Allez sur https://git-scm.com/download/windows
2. Téléchargez Git pour Windows
3. Installez avec les paramètres par défaut
4. Redémarrez VS Code après l'installation

### Option B : Via Chocolatey (si installé)
```powershell
choco install git
```

### Option C : Via Scoop (si installé)
```powershell
scoop install git
```

## Étape 2 : Configuration Git (après installation)

Ouvrez un terminal PowerShell dans le dossier du projet et exécutez :

```bash
# Configuration de votre identité
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Initialiser le dépôt
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🚀 Initial commit: GoBot website with 10 services"
```

## Étape 3 : Créer le dépôt sur GitHub

1. **Aller sur GitHub** : https://github.com
2. **Se connecter** à votre compte (ou créer un compte)
3. **Cliquer sur "New repository"** (bouton vert)
4. **Nommer le repository** : `gobot` ou `gobot-website`
5. **Description** : "GoBot - La solution qui pense à tout et surtout à vous ! 🤖"
6. **Laisser Public** (ou Private si vous préférez)
7. **NE PAS cocher** "Initialize this repository with a README"
8. **Cliquer "Create repository"**

## Étape 4 : Lier et pousser vers GitHub

```bash
# Ajouter l'origine remote (remplacer [username] et [repository-name])
git remote add origin https://github.com/[username]/[repository-name].git

# Renommer la branche principale
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

## Exemple de commandes complètes

```bash
# Dans le dossier C:\Users\x\gobot
git init
git add .
git commit -m "🚀 Initial commit: GoBot website with 10 services"
git remote add origin https://github.com/VotreUsername/gobot.git
git branch -M main
git push -u origin main
```

## ✅ Fichiers déjà préparés

- ✅ `.gitignore` - Ignore les fichiers non nécessaires
- ✅ `README.md` - Documentation complète mise à jour
- ✅ Structure du projet organisée
- ✅ Package.json avec scripts npm

## 🔧 Commandes utiles après la mise en ligne

```bash
# Voir le statut
git status

# Ajouter des modifications
git add .
git commit -m "Description des changements"
git push

# Voir l'historique
git log --oneline

# Voir les fichiers suivis
git ls-files
```

## 📝 Suggestions pour les futurs commits

```bash
git commit -m "✨ Add new feature"
git commit -m "🐛 Fix bug in contact form"
git commit -m "💄 Update UI design"
git commit -m "📱 Improve mobile responsiveness"
git commit -m "🚀 Deploy to production"
```

## 🌐 Activation GitHub Pages (optionnel)

Pour héberger gratuitement votre site :

1. Dans votre dépôt GitHub, allez dans **Settings**
2. Descendez jusqu'à **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** / **/ (root)**
5. **Save**

Votre site sera disponible à : `https://[username].github.io/gobot`

---

📞 **Besoin d'aide ?** Contactez le support GoBot !
