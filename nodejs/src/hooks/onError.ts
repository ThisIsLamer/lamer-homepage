import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { HookController } from '../classes/HookController';

export default class extends HookController {
  constructor() {
    super({
      name: 'onError',
      func: async (request: FastifyRequest, reply: FastifyReply, error: FastifyError) => {
        this.logger.info(
          `Error code: ${error.code}, status: ${error.statusCode}, name: ${error.name}. ${error.message}`
        );
      },
    });
  }
}
