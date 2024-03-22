import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateUserBody, CreateUserRes } from './create-user.controller.i';
import { Request } from 'express';
import { ChatLogger } from '../../../infracture/utils/logger/logger';
import { CreateUserPublish } from '../../../infracture/common/publisher/create-user-publisher/create-user-publisher';

@Controller('/create-user')
export class CreateUserController {
  constructor(private logger: ChatLogger, private createUserPublish: CreateUserPublish) {}

  @Post("")
  public async createUser(@Req() req: Request, @Body() createUserBody: CreateUserBody): Promise<CreateUserRes>{
    const body = { ...createUserBody };
    const topic = 

    this.createUserPublish.publish();
  }
}
