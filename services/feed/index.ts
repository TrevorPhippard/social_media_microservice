import amqp, { ConsumeMessage } from "amqplib";
import redis from "redis";

const REDIS_FEED_KEY = "feeds";

async function start() {
  const redisClient = redis.createClient({ url: "redis://redis:6379" });
  await redisClient.connect();

  const conn = await amqp.connect("amqp://rabbitmq");
  const channel = await conn.createChannel();
  await channel.assertQueue("feed_events");

  channel.consume("feed_events", async (msg: ConsumeMessage | null) => {
    if (!msg) return;
    const event = JSON.parse(msg.content.toString());
    console.log("Feed Event:", event);
    await redisClient.lPush(REDIS_FEED_KEY, JSON.stringify(event));
    channel.ack(msg);
  });

  console.log("Feed service listening for events...");
}

start();
