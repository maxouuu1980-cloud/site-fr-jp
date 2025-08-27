# Site vitrine FR・JP — Art de Vivre Durable

- Bilingue FR・JP avec **toggle** (FR/日本語).
- Charte graphique épurée : navy, accents sky/emerald, Inter + Noto Sans JP.
- Images **libres de droit** (Unsplash) incluses par URL.
- Pages : `index.html`, `pages/subscribe.html`, `pages/overview.html`, `legal/mentions.html`, `legal/cgv.html`.
- Le bouton “S’abonner” envoie vers `/create-checkout-session` (serveur Flask déjà fourni).

## Déploiement
Hébergez le dossier tel quel sur OVH/Azure Static Web Apps/Cloud Storage/CDN. Si vous utilisez le serveur Flask existant, servez ce dossier en statique OU placez les mêmes templates côté Flask.
