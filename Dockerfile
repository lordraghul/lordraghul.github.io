# Étape 1 : Build de l'application
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copier tout le projet et builder
COPY . .
RUN npm run build

# Étape 2 : Exécution de l'application (image plus légère)
FROM node:18-alpine

WORKDIR /app

# Copier uniquement le dossier .output et node_modules du builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/node_modules /app/node_modules
COPY package.json ./

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["node", ".output/server/index.mjs"]
