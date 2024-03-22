import { Injectable } from "@nestjs/common";
import { ChatLogger } from "../../infracture/utils/logger/logger";
import { CreateResultParams } from "./create-user.usecase.i";
import { KafkaResult } from "../../controller/messaging/kafka-consumer.i";

@Injectable()
export class CreateUserUseCase {
  constructor(private logger: ChatLogger){}

  public excute(params: CreateResultParams){
    if(params.result === KafkaResult.FAILURE){
      return;
    }

    
  }
}