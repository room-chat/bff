import { KafkaConfig } from '../../../enviroment/kafka';

export const consumer = new KafkaConfig().consumerTopics;

export enum KafkaEventName {
  CREATE_USER_RESULT = 'create-user-result'
}

export enum KafkaResult {
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export interface EventMessageArg extends KafkaInterface {
  eventName: string;
  data: any;
}

export interface KafkaInterface {
  topic: string;
  partition: number;
  timestamp: string;
  size: number;
  attributes: number;
  offset: string;
  key: any;
  value: any;
  headers: Record<string, any>;
}
