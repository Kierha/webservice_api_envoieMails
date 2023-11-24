# API d'Envoi d'Emails

Cette API, fonctionnant comme un service consommateur, est conçue pour recevoir des messages via RabbitMQ et envoyer des emails de vérification aux utilisateurs nouvellement inscrits.

## Technologies

- Node.js
- Express
- RabbitMQ
- Nodemailer
- Docker (optionnel)
- Mailhog (pour les tests en développement)

## Installation

### Prérequis

- Node.js (v16 ou supérieure)
- RabbitMQ
- Docker (optionnel)
- Mailhog (pour les tests en développement)

### Installation Manuelle en Local

1. Clonez le dépôt GitHub :
   ```
   git clone https://github.com/Kierha/webservice_api_envoieMails.git
   ```
2. Accédez au dossier du projet :
   ```
   cd webservice_api_envoieMails
   ```
3. Installez les dépendances :
   ```
   npm install
   ```

### Configuration

Configurez vos variables d'environnement pour la connexion à RabbitMQ et les détails de l'envoi d'email dans un fichier `.env` à la racine du projet.

### Lancement du Projet en Local

Après avoir installé les dépendances, lancez le service avec :

```
npm start
```

## Installation et Lancement via Docker

Pour installer et lancer l'application en utilisant Docker, suivez les étapes ci-dessous :

1. Construisez les images Docker :

   ```
   docker-compose up --build
   ```

2. Le service sera lancé et en attente de messages de RabbitMQ.

3. Arrêtez les conteneurs Docker :
   ```
   docker-compose down
   ```

## Utilisation de l'API

L'API écoute les messages de RabbitMQ envoyés par l'API d'Inscription Utilisateur. Lorsqu'un message est reçu, l'API envoie un email de vérification à l'adresse fournie.

### Interaction avec l'API d'Inscription Utilisateur

Lorsqu'un utilisateur s'inscrit via l'[API d'Inscription Utilisateur](https://github.com/Kierha/webservice_api_inscription), un message contenant les détails de l'utilisateur est envoyé à cette API via RabbitMQ. L'API d'Envoi d'Emails reçoit ensuite ce message et envoie un email de vérification.

## Tests avec Mailhog

Pour tester l'envoi d'emails en développement, vous pouvez utiliser Mailhog. Les emails envoyés seront interceptés par Mailhog, vous permettant de les visualiser sans les envoyer réellement.

