import Fastify from 'fastify';
import path from 'path/posix';
import fs from 'fs';
import { AddressInfo } from 'net';

import { loadDiscordInfo, loadInfo } from './load.info';

import { Logger } from './utils';
import envLoader from './utils/env.loader';
envLoader();

const logger = new Logger(__filename.replace(__dirname, ''));

const fastify = Fastify();

const files = fs.readdirSync('.build/hooks');
files.map(async (file) => {
  const data = new ((await import('./hooks/' + file)) as any).default();
  fastify.addHook(data.name, (...values: any[]) => data.func(...values));
});

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
    const server = fastify.server.address() as AddressInfo;
    logger.info(`local: http://localhost:${server.port}`);
    logger.info(`global: https://${process.env.DOMAIN}`);
  })
  .catch((error) => {
    logger.error(error);
  });
