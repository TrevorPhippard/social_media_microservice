import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "notification-service",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "notifications" });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-signup", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      console.log(
        `Notification received on ${topic}:`,
        message.value?.toString()
      );
    },
  });

  console.log("Notification service listening for Kafka messages...");
}

start();
