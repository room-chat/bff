import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { EventMessageArg, KafkaEventName, consumer } from './kafka-consumer.i';
import { ChatLogger } from 'src/app/infracture/utils/logger/logger';
import { CreateUserHandler } from './create-user/create-user-handler';

@Controller()
export class KafkaConsumerHandler {
  constructor(
    private logger: ChatLogger,
    private createUser: CreateUserHandler
  ) {}

  @EventPattern(consumer.chatTopic)
  public async EventMessaging(@Payload() payload: EventMessageArg) {
    const event = payload.eventName;

    switch (event) {
      case KafkaEventName.CREATE_USER_RESULT: {
        
      }
    }
  }
}
