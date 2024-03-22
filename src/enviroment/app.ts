import * as path from 'path';
import * as fs from 'fs';

export type EnvConfig = {
  SERVICE_CONFIG: string;
};

export interface IAppConfig {
  port: number;
  host: string;
}

export class App {
  public readonly dir = path.join(__dirname, '../asset/config/config-file.json');
  public readonly nameConfig = 'app';

  public port = 3000;
  public host = 'localhost';

  constructor(env: EnvConfig = process.env as EnvConfig) {
    let conf: IAppConfig;

    try {
      conf = JSON.parse(fs.readFileSync(env.SERVICE_CONFIG || this.dir, 'utf-8'))[this.nameConfig] as IAppConfig;
    } catch (error) {
      console.log('Connect occur error');
    }

    this.host = conf.host || this.host;
    this.port = conf.port || this.port;
  }
}
