import * as path from 'path';
import * as fs from 'fs';

export type IEnv = {
  SERVICE_CONFIG: string;
}

export interface IHttpClient {
  userHttp: string;
}  

export class HttpClient {
  public readonly dir = path.join(__dirname, '../asset/config/config-file.json');
  public readonly nameConfig = 'http';

  public userHttp = 'http://localhost:3001'
  constructor(env: IEnv = process.env as IEnv){
    let conf: IHttpClient;

    try {
      conf = JSON.parse(fs.readFileSync(env.SERVICE_CONFIG || this.dir, 'utf-8'))[this.nameConfig] as IHttpClient;
    } catch(error) {
      console.log('Connect Http error ouccur');
    }

    this.userHttp = conf.userHttp || this.userHttp;
  }
}