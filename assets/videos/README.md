# Guide pour ajouter des vidéos au Live

## Vidéos utilisées actuellement

La page live utilise plusieurs sources vidéo dans cet ordre de priorité :

1. **Big Buck Bunny** - Vidéo de démonstration gratuite (Google)
2. **Sample Video** - Vidéo de test alternative 
3. **Vidéo locale** - `assets/videos/live-demo.mp4` (si disponible)

## Comment ajouter votre propre vidéo

### Option 1 : Vidéo locale
1. Placez votre fichier vidéo dans `assets/videos/`
2. Nommez-le `live-demo.mp4` 
3. La vidéo sera automatiquement utilisée en priorité

### Option 2 : Vidéo en ligne
1. Hébergez votre vidéo sur un CDN ou service cloud
2. Modifiez le fichier `live.html`
3. Remplacez une des URLs dans les balises `<source>`

## Format recommandé

- **Format** : MP4 (H.264)
- **Résolution** : 1280x720 minimum
- **Durée** : 2-10 minutes (en boucle)
- **Contenu suggéré** : 
  - Marché africain
  - Artisans au travail
  - Présentation de produits
  - Ambiance festive

## Poster (image d'aperçu)

L'image d'aperçu actuelle provient d'Unsplash et montre un marché.
Pour la personnaliser, remplacez l'URL dans l'attribut `poster` de la vidéo.

## Exemples de contenus pour le live

- Démonstration de fabrication de savon
- Visite d'un marché béninois
- Interview d'artisans
- Présentation de produits locaux
- Témoignages de clients satisfaits
