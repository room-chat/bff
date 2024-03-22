import { Module } from "@nestjs/common";
import { CreateUserHandler } from "./create-user-handler";
import { ChatLoggerModule } from "../../../infracture/utils/logger/logger.module";
import { CreateUserUseCaseModule } from "../../../application/create-user-usecase/create-user.usecase.module";

@Module({
  imports: [ChatLoggerModule, CreateUserUseCaseModule],
  controllers: [CreateUserHandler]
})
export class CreateUserHandlerModule {}