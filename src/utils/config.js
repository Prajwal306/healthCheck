require('dotenv').config();

const config = {
  apiEnabled: process.env.API_ENABLED === 'true',
  mysqlEnabled: process.env.MYSQL_ENABLED === 'true',
  redisEnabled: process.env.REDIS_ENABLED === 'true',
  kafkaEnabled: process.env.KAFKA_ENABLED === 'true',
  akamaiEnabled: process.env.AKAMAI_ENABLED === 'true',
  mysqlConfig: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  redisConfig: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  },
  kafkaConfig: {
    broker: process.env.KAFKA_BROKER
  },
  akamaiConfig: {
    url: process.env.AKAMAI_URL
  }
};

module.exports = config;
