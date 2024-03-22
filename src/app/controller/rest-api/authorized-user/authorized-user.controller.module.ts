import { Module } from "@nestjs/common";
import { AuthorizedUserController } from "./authorized-user.controller";
import { ChatLoggerModule } from "../../../../app/infracture/utils/logger/logger.module";
import { HttpClientServiceModule } from "../../../../app/infracture/common/http-client/http-client.module";
import { ConfigServiceModule } from "../../../../app/infracture/config/config.service.module";

@Module({
  imports: [ChatLoggerModule, HttpClientServiceModule, ConfigServiceModule],
  controllers: [AuthorizedUserController],
})
export class AuthorizedUserControllerModule{}