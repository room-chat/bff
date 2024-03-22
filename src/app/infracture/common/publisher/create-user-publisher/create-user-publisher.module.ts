import { Module } from "@nestjs/common";
import { KafkaProducerModule } from "../producer/kafka-producer.module";
import { CreateUserPublish } from "./create-user-publisher";

@Module({
  imports: [KafkaProducerModule],
  exports: [CreateUserPublish],
  providers: [CreateUserPublish]
})
export class CreateUserPublisherModule {}