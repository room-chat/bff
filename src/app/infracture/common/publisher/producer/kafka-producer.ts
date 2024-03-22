import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { ConfigService } from '../../../../../app/infracture/config/config.service';
import { ChatLogger } from '../../../../../app/infracture/utils/logger/logger';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  public producer: Producer = this.createProducer();

  constructor(private config: ConfigService, private logger: ChatLogger) {}

  createProducer(): Producer{
    const kafkaConfig = this.config.KafkaConfig();

    this.kafka = new Kafka({
      brokers: kafkaConfig.options.client.brokers,
      clientId: kafkaConfig.options.client.clientId,
    });

    return this.kafka.producer();
  }

  async onModuleInit() {
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  public async send(topic: any, data: any): Promise<any> {

    try {
      const messages: ProducerRecord = {
        topic,
        messages: [
          {
            key: null,
            value: JSON.stringify(data)
          }
        ]
      };

      this.logger.log('Producer topic has send message', 'PublisherTopic');
      await this.producer.send(messages);
    } catch (e) {
      this.logger.log('Producer connect error', 'PublisherTopicError');
      throw new Error(e.message);
    }
  }
}
