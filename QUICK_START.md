# 🚀 Guide de Démarrage Rapide - SetSound Suite TSX

## Installation en 3 étapes

### 1️⃣ Installer les dépendances

```bash
cd App-wings8os/setsound-suite-tsx
npm install
```

Ou avec pnpm (recommandé pour plus de rapidité) :
```bash
pnpm install
```

### 2️⃣ Lancer le serveur de développement

```bash
npm run dev
```

Ou avec pnpm :
```bash
pnpm dev
```

L'application sera accessible sur **http://localhost:5173**

### 3️⃣ Tester l'application

Ouvrez votre navigateur et accédez à l'URL affichée dans le terminal.

---

## 🎯 Fonctionnalités Disponibles

### ✅ Coupeur Audio
- Chargez un fichier audio (MP3, WAV, etc.)
- Visualisez la waveform
- Rognez avec précision
- Appliquez des effets Fade In/Out
- Exportez en WAV

### ✅ Fusionneur Audio
- Ajoutez plusieurs fichiers
- Réorganisez l'ordre
- Normalisez le volume
- Fusionnez en un seul fichier

### ✅ Détecteur BPM
- Analysez le tempo automatiquement
- Détectez la tonalité
- Affichez la confiance de l'analyse

### ✅ Enregistreur Audio
- Enregistrez depuis le microphone
- Visualisation en temps réel
- Choisissez la qualité
- Exportez vos enregistrements

---

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de dev avec hot-reload

# Build
npm run build        # Compile pour la production dans /dist

# Preview
npm run preview      # Prévisualise le build de production

# Lint
npm run lint         # Vérifie le code TypeScript
```

---

## 📝 Notes Importantes

### Navigateurs Supportés
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ⚠️ Nécessite HTTPS pour l'enregistrement microphone (sauf localhost)

### Permissions Requises
- **Microphone** : Pour l'enregistreur audio
- **Stockage** : Pour télécharger les fichiers exportés

### Formats Audio Supportés
- **Import** : MP3, WAV, OGG, FLAC, AAC, M4A
- **Export** : WAV (haute qualité)

---

## 🐛 Résolution de Problèmes

### Le microphone ne fonctionne pas
1. Vérifiez les permissions du navigateur
2. Utilisez HTTPS ou localhost
3. Vérifiez que le microphone est connecté

### Les fichiers ne se chargent pas
1. Vérifiez le format du fichier
2. Essayez avec un fichier plus petit
3. Vérifiez la console du navigateur (F12)

### L'application est lente
1. Utilisez des fichiers audio plus courts
2. Fermez les autres onglets
3. Essayez avec un navigateur différent

---

## 📦 Build pour Production

```bash
# Build
npm run build

# Le dossier dist/ contient l'application prête à déployer
```

### Déploiement

**Netlify / Vercel :**
```bash
# Connectez votre repo GitHub
# Configurez : Build command = npm run build
#              Publish directory = dist
```

**Serveur statique :**
```bash
# Copiez le contenu de dist/ sur votre serveur
cp -r dist/* /var/www/html/
```

---

## 💡 Conseils d'Utilisation

### Pour de meilleures performances
- Utilisez des fichiers audio de moins de 10 minutes
- Fermez les outils non utilisés
- Utilisez Chrome pour les meilleures performances

### Pour une meilleure qualité
- Enregistrez en haute qualité (48kHz)
- Normalisez le volume avant fusion
- Utilisez des fichiers WAV non compressés

---

## 🔗 Liens Utiles

- [Documentation complète](./README.md)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Consultez la console du navigateur (F12)
2. Vérifiez que toutes les dépendances sont installées
3. Essayez de supprimer `node_modules` et réinstaller

```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Bon développement ! 🎵**