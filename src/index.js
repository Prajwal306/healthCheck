const fastify = require('fastify')({ logger: true });
const healthPlugin = require('./plugins/healthPlugins');
const healthRoutes = require('./routes/health');

fastify.register(healthPlugin);
fastify.register(healthRoutes);

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
