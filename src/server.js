const express = require("express");
const rabbitMQConsumer = require("./messaging/rabbitMQConsumer");

const app = express();
const port = 3001;

// Démarrage du consommateur RabbitMQ
rabbitMQConsumer.start();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
