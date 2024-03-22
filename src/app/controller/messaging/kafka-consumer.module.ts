import { Module } from '@nestjs/common';
import { KafkaConsumerHandler } from './kafka-consumer';
import { ChatLoggerModule } from '../../infracture/utils/logger/logger.module';
import { CreateUserHandlerModule } from './create-user/create-user-handler.module';

@Module({
  controllers: [KafkaConsumerHandler],
  imports: [ChatLoggerModule, CreateUserHandlerModule],
  exports: [],
  providers: [KafkaConsumerHandler],
})
export class KafkaConsumerModule {}
