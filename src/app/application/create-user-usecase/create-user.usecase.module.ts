import { Module } from "@nestjs/common";
import { ChatLoggerModule } from "../../infracture/utils/logger/logger.module";

@Module({
  imports: [ChatLoggerModule],
  exports: [],
  providers: []
})
export class CreateUserUseCaseModule {}