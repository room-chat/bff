import { Injectable } from "@nestjs/common";
import { KafkaProducerService } from "../producer/kafka-producer";

@Injectable()
export class CreateUserPublish {
  constructor(private producer: KafkaProducerService){}

  public async publish(topic: string, message: any): Promise<void>{
    await this.producer.send(topic, message);
  }
}