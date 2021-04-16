// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const path = require('path');

// Register Plugin
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/', // optional: default '/'
  });

// second plugin
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public/assets'),
    prefix: '/assets', // optional: default '/'
    decorateReply: false // the reply decorator has been added by the first plugin registration
  });

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public/forms'),
    prefix: '/forms', // optional: default '/'
    decorateReply: false // the reply decorator has been added by the first plugin registration
  });

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