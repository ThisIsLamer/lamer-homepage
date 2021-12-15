import { HookController } from '../classes/HookController';

export default class extends HookController {
  constructor() {
    super({
      name: 'onClose',
      func: () => {
        this.logger.info('Server close');
      },
    });
  }
}
