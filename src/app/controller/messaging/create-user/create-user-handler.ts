import { Injectable } from "@nestjs/common";
import { ChatLogger } from "../../../infracture/utils/logger/logger";
import { CreateUserUseCase } from "../../../application/create-user-usecase/create-user.usecase";

@Injectable()
export class CreateUserHandler {
  constructor(private logger: ChatLogger, private useCase: CreateUserUseCase){}

  public handler() {
    this.logger.log("Call event Create User", "KafkaCreateUser");

    this.useCase.excute();
  }
}