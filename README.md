# 📦 devWeb

Ce projet est une application web moderne basée sur **VueJs** et **Vite**, conçue pour apprendre et expérimenter avec VueJs, l’intégration / déploiement automatisé (CI/CD) et la mise en place d’une application web progressive (PWA).

---

## 🚀 Présentation

- **Vue 3** — framework JavaScript ou Typescript
- **Vite** —
- **Structure prête à l’emploi** pour le développement, les tests, et la production

Le projet inclut également des workflows CI/CD pour automatiser les tests et le déploiement, ainsi que les bases pour une **Progressive Web App (PWA)**.

---

## 📌 Fonctionnalités principales

### 🛠️ Fonctionnalités du projet

- 🧪 **Tests unitaires** avec Vitest
- ⚙️ **CI/CD** automatisé via GitHub Actions
- 📱 **Support Progressive Web App (PWA)**
- 🔧 **Qualité de code** Prettier / linter

---

## 🧠 Outils & Technologies utilisées

| Catégorie | Outils                          |
| --------- | ------------------------------- |
| Framework | VueJs                           |
| Build     | Vite                            |
| Tests     | Vitest                          |
| CI/CD     | GitHub Actions                  |
| PWA       | Service Workers / manifest.json |
| Code      | JavaScript / HTML / CSS         |
| Config    | Prettier                        |

---

## ⚙️ Installation & démarrage

Clone le dépôt et installe les dépendances :

```sh
git clone https://github.com/RobinTijou49/devWeb.git
cd devWeb
npm install
```

### 🧪 Pour le développement

```sh
npm run dev
```

Ouvre ensuite ton navigateur sur [http://localhost:5173](http://localhost:5173) pour voir l’application en développement.

### 📦 Pour la production

```sh
npm run build
```

Cette commande génère une version de l'app dans un dossier `dist/` ou les fichier sont minifiés.

### 🧪 Pour les tests

```sh
npm run test:unit
```

---

## ⚙️ CI/CD — Intégration Continue / Déploiement Continu

Ce projet inclut un workflow **GitHub Actions** pour automatiser les étapes de développement :

- **CI (Intégration continue)** :
  À chaque push sur la branche main, la pipeline :
  - installe les dépendances,
  - lance les tests,
  - vérifie que le build est OK.

- **CD (Déploiement continu)** :
  Une fois que tous les tests sont passés, l’application peut être automatiquement déployée vers l’environnement de production.

---

## 📱 PWA — Progressive Web App

Ce projet est conçu pour être une **Progressive Web App** :

- 📲 Possibilité d’installation sur mobile ou bureau depuis le navigateur (pas de store)
- 📴 Fonctionne hors ligne grâce aux **Service Workers**

---

## 📂 Organisation du code

```
/.github/workflows/  ← workflows GitHub Actions (CI/CD)
/public/             ← fichiers statiques (images, icones ...) et manifest.json PWA
/src/                ← sources Vue (composants / pages / styles)
/tests/              ← tests unitaires Vitest
vite.config.js       ← configuration Vite
```

---
