async function routes(fastify, options) {
    fastify.get('/health', async (request, reply) => {
      const healthStatus = await fastify.healthCheck();
      reply.send(healthStatus);
    });
  }
  
  module.exports = routes;
  