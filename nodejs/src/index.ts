import Fastify from 'fastify';
import path from 'path/posix';
import { AddressInfo } from 'net';

import { loadDiscordInfo, loadInfo } from './load.info';

import { Logger } from './utils/logger';
import envLoader from './utils/env.loader';
envLoader();

const logger = new Logger(__filename.replace(__dirname, ''));

const fastify = Fastify();
fastify.register(import('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
  templates: 'src/templates',
  options: {},
});

fastify.register(import('fastify-static'), {
  root: path.join(process.cwd(), 'src/templates'),
});

fastify.get('/', async (req, reply) => {
  return reply.view('index.ejs', {
    ...(await loadDiscordInfo()),
    ...loadInfo(),
  });
});

fastify
  .listen(3000, '0.0.0.0')
  .then(() => {
    logger.info(`Listening port on ${(fastify.server.address() as AddressInfo).port}`);
  })
  .catch((err) => {
    console.error(err);
  });
