// src/config/configuration.ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'sqlite',
    database: process.env.DATABASE_FILE || 'db.sqlite',
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL || 'amqp://user:password@localhost:5672',
    queuePrefix: process.env.QUEUE_PREFIX || 'product',
  }
});
