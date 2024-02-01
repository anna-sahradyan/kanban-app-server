const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const configurationDatabase = require('./config/databaseDB');
const mongoose = require('mongoose');
require('dotenv').config();

const databaseConfig = {
  uri: process.env.MONGODB_URI,
  option: {},
};

const startServer = async () => {
  try {
    fastify.register(fastifyCors, {
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });
    await fastify.listen({
      port: process.env.PORT || 4000,
    });
    fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
  } catch (err) {
    console.log(err);
  }
};
const configuresRoutes = () => {
  const userRoutes = require('./routes/user.router');
  // fastify.register(todosRoutes, { prefix: '/api/v1/todos' });
  fastify.register(userRoutes, { prefix: '/api/v1/users' });
};
const start = async () => {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    await configurationDatabase(databaseConfig);
    configuresRoutes();
    await startServer(signal);
  } catch (err) {
    console.log(err);
  }
  process.on('SIGINT', async () => {
    try {
      controller.abort();
      await mongoose.connection.close();
      process.exit(0);
    } catch (err) {
      console.error('Error closing Mongoose connection', err);
      process.exit(1);
    }
  });
};

start();