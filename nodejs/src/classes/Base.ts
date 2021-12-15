import { Logger } from '../utils';

export class Base {
  public logger: Logger;

  constructor(source: string) {
    this.logger = new Logger(source);
  }
}
