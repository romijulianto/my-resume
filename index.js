// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Register Plugin
fastify.register(require('fastify-static'), require("./config/static").public);
fastify.register(require('fastify-static'), require("./config/static").assets);
fastify.register(require('fastify-static'), require("./config/static").forms); 

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();