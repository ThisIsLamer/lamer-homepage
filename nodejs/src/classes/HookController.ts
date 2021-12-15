import { Base } from './Base';

/* eslint-disable @typescript-eslint/ban-types */
export class HookController extends Base {
  private name: string;
  private func: Function;

  constructor(options: IHookController) {
    super(`Hook: ${options.name}`);
    this.name = options.name;
    this.func = options.func;
  }
}

interface IHookController {
  name: string;
  func: Function;
}
