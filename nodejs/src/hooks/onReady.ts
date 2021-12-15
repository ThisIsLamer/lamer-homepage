import { HookController } from '../classes/HookController';

export default class extends HookController {
  constructor() {
    super({
      name: 'onReady',
      func: async () => {
        this.logger.info('Server on ready');
      },
    });
  }
}
