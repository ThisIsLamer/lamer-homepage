import fs from 'fs';
import { parse } from 'dotenv';

export default function (path?: string): void {
  const envConf = parse(fs.readFileSync(path ? path + '/.env' : '../.env'));
  Object.keys(envConf).map((i) => {
    process.env[i] = envConf[i];
  });
}
