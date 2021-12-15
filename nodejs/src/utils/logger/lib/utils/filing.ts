import path from 'path';
import fs from 'fs';

export class Filing {
  private dirname = path.resolve('.') + '/logs';
  constructor() {
    if (!fs.existsSync(this.dirname)) fs.mkdirSync('logs');
  }

  protected write(...values: any[]): void {
    const filePath = this.getFilePath();
    if (process.env?.NODE_ENV === 'development') return;
    if (fs.existsSync(filePath)) {
      fs.readdirSync(this.dirname).map((file) => {
        const difference = new Date(file.replace('.log', '')).getTime() - new Date().getTime();
        // count milliseconds in a mounth: 43200000
        if (difference / 43200000 > 3) fs.unlinkSync(this.dirname + file);
      });

      fs.openSync(filePath, 'r');
    }

    fs.appendFile(filePath, `${values.flat(1).join(' ')}\n`, 'utf8', (err) => {
      if (err) console.error(err);
    });
  }

  private getDate() {
    return new Date().toLocaleDateString().replace(/[/]/g, '.');
  }

  private getFilePath() {
    return this.dirname + '/' + this.getDate() + '.log';
  }
}
