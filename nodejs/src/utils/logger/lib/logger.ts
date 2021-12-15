import { Filing } from './utils/filing';

export class Logger extends Filing {
  constructor(private source?: string) {
    super();
  }

  public info(...values: any[]): void {
    console.info(
      this.colorize('[INFO]', Colors.CYAN),
      this.prefix(true),
      ...values.map((v) => this.colorize(v, Colors.CYAN))
    );
    this.write('[INFO]', `${this.prefix()}`, values);
  }

  public warn(...values: any[]): void {
    console.warn(
      this.colorize('[WARN]', Colors.YELLOW),
      this.prefix(true),
      ...values.map((v) => this.colorize(v, Colors.YELLOW))
    );
    this.write('[WARN]', `${this.prefix()}`, values);
  }

  public error(error: Error, params: ErrorParams = {}): void {
    console.log(
      this.colorize('[ERROR]', Colors.RED),
      this.prefix(true),
      this.colorize(params.message ?? error.message, Colors.RED)
    );
    this.write('[ERROR]', `${this.prefix()}`, params.message ?? error.message);

    const exError: any = error;
    exError._customMessage = params.message ?? null;
    exError._source = this.source ?? null;
    exError._time = this.getUTCTime();
    exError._memoryUsage = this.getMemoryUsage();

    console.error(exError);
    this.write(exError);
    if (params.exit) process.exit(1);
  }

  private prefix(paint?: boolean): string {
    const source = this.source ? ` [${this.source}]` : '';
    if (paint)
      return (
        this.colorize(`[${this.getUTCTime()} | ${this.getMemoryUsage()}]`, Colors.GRAY) +
        this.colorize(source, Colors.WHITE)
      );
    return `[${this.getUTCTime()} | ${this.getMemoryUsage()}]` + source;
  }

  private getUTCTime(): string {
    return new Date().toLocaleString();
  }

  private getMemoryUsage(): string {
    return Math.ceil(process.memoryUsage().heapUsed / 1e6) + ' Mb';
  }

  private colorize(value: string, colorizer: Colors): string {
    if (typeof value === 'object' || typeof value === 'function') return value;
    return colorizer + value + '\x1b[0m';
  }
}

export const logger = new Logger();

export interface ErrorParams {
  message?: string;
  exit?: boolean;
}

enum Colors {
  RED = '\x1b[31m',
  CYAN = '\x1b[36m',
  YELLOW = '\x1b[33m',
  GRAY = '\x1b[90m',
  WHITE = '\x1b[37m',
}
