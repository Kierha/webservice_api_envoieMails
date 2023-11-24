const amqp = require("amqplib");
const emailService = require("../services/emailService");
const { rabbitMQUrl, emailQueue } = require("../config/mqConfig");

class RabbitMQConsumer {
  async start() {
    const conn = await amqp.connect(rabbitMQUrl);
    const channel = await conn.createChannel();

    await channel.assertQueue(emailQueue);

    channel.consume(emailQueue, (msg) => {
      if (msg !== null) {
        console.log(`Received message: ${msg.content.toString()}`);
        emailService.sendEmail(JSON.parse(msg.content.toString()));
        channel.ack(msg);
      }
    });
  }
}

module.exports = new RabbitMQConsumer();
