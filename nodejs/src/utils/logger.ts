export class Logger {
  private colorCode;

  constructor(public source?: string) {
    this.colorCode = {
      Black: '\x1b[30m',
      Red: '\x1b[31m',
      Green: '\x1b[32m',
      Yellow: '\x1b[33m',
      Blue: '\x1b[34m',
      Magenta: '\x1b[35m',
      Cyan: '\x1b[36m',
      White: '\x1b[37m',
    };
  }

  public log(message: string): void {
    console.log(this.getBase() + this.setColor('White', message));
  }

  public info(message: string): void {
    console.log(this.getBase() + this.setColor('Cyan', message));
  }

  public success(message: string): void {
    console.log(this.getBase() + this.setColor('Green', message));
  }

  public warn(message: string): void {
    console.log(this.getBase() + this.setColor('Yellow', message));
  }

  public error(error: ExtendedError, message?: string): void {
    if (message) error._customMessage = message;

    error._metadata = {
      time: this.getTime(),
      processData: this.getProcessData(),
      source: this.source,
    };

    console.error(error);
  }

  private setColor(color: Colors, message: string) {
    return `${this.colorCode[color]} ${message} \x1b[0m`;
  }

  private getTime() {
    const date = new Date();
    return `${date.getDay()}.${date.getMonth()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  private getProcessData() {
    return `${Math.ceil(process.memoryUsage().heapUsed / 1000000)} Mb`;
  }

  private getBase() {
    return `\x1b[35m [${this.getTime()}] | [${this.getProcessData()}] \x1b[37m${
      this.source ? '[' + this.source + ']' : ''
    }`;
  }
}

export const logger = new Logger();

interface ExtendedError extends Error {
  _customMessage?: string;
  _metadata?: {
    time?: string;
    processData?: string;
    source?: string;
  };
}

type Colors = 'Black' | 'Red' | 'Green' | 'Yellow' | 'Blue' | 'Magenta' | 'Cyan' | 'White';
