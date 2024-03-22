import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthReq, AuthUserRes } from './authorized-user.controller.i';
import { AxiosRequestConfig } from 'axios';
import { Request } from 'express';
import { ChatLogger } from '../../../../app/infracture/utils/logger/logger';
import { HttpClientService } from '../../../../app/infracture/common/http-client/http-client';
import { ConfigService } from '../../../../app/infracture/config/config.service';

@Controller('/authorized-user')
export class AuthorizedUserController {
  constructor(
    private logger: ChatLogger,
    private httpService: HttpClientService,
    private configService: ConfigService
  ) {}

  @Post('')
  public async authorizedUser(@Req() req: Request, @Body() authReq: AuthReq): Promise<AuthUserRes> {
    const bodyReq = {
      email: authReq.email,
      password: authReq.password,
    };

    const header = {};
    const url = `${this.configService.HttpConfig().userHttp}/authorized-user`;

    const config: AxiosRequestConfig = {
      headers: header,
    };

    const responseHttp = await this.httpService.post$(url, config, bodyReq);

    const data = responseHttp.data as AuthUserRes;

    return data;
  }
}
