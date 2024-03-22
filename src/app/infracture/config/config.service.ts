import { Injectable } from '@nestjs/common';
import { App } from '../../../enviroment/app';
import { HttpClient } from '../../../enviroment/http';
import { KafkaConfig } from '../../../enviroment/kafka';
import { Partitioners } from 'kafkajs';
import { Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {
  public readonly app: App;
  public readonly http: HttpClient;
  public readonly kafkaConfig: KafkaConfig;

  constructor() {
    this.app = new App();
    this.http = new HttpClient();
    this.kafkaConfig = new KafkaConfig();
  }

  public AppConfig() {
    return this.app;
  }

  public HttpConfig() {
    return this.http;
  }

  public KafkaConfig() {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: this.kafkaConfig.clientId,
          brokers: this.kafkaConfig.brokers,
          ssl: this.kafkaConfig.ssl,
          sasl: undefined,
        },
        consumer: {
          groupId: this.kafkaConfig.groupId,
        },
        producer: {
          createPartitioner: Partitioners.LegacyPartitioner,
        },
      },
    };
  }
}
