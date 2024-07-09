const fastifyPlugin = require('fastify-plugin');
const config = require('../utils/config');
const apiCheck = require('../checks/apiCheck');
//const mysqlCheck = require('../checks/mysqlCheck');
//const redisCheck = require('../checks/redisCheck');
//const kafkaCheck = require('../checks/kafkaCheck');
//const akamaiCheck = require('../checks/akamaiCheck');

async function healthPlugin(fastify, options) {
  fastify.decorate('healthCheck', async () => {
    const results = {};

    if (config.apiEnabled) {
      results.api = await apiCheck();
    }

    if (config.mysqlEnabled) {
      results.mysql = await mysqlCheck();
    }

    if (config.redisEnabled) {
      results.redis = await redisCheck();
    }

    if (config.kafkaEnabled) {
      results.kafka = await kafkaCheck();
    }

    if (config.akamaiEnabled) {
      results.akamai = await akamaiCheck();
    }

    return results;
  });
}

module.exports = fastifyPlugin(healthPlugin);
