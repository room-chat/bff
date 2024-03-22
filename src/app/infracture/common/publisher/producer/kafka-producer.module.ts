import { Module } from "@nestjs/common";
import { KafkaProducerService } from "./kafka-producer";
import { ConfigServiceModule } from "../../../../../app/infracture/config/config.service.module";
import { ChatLoggerModule } from "../../../../../app/infracture/utils/logger/logger.module";

@Module({
  imports: [ConfigServiceModule, ChatLoggerModule],
  exports: [KafkaProducerService],
  providers: [KafkaProducerService]
})
export class KafkaProducerModule{}