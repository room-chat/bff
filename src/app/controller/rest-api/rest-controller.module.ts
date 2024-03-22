import { Module } from "@nestjs/common";
import { AuthorizedUserControllerModule } from "./authorized-user/authorized-user.controller.module";
import { AuthorizedUserController } from "./authorized-user/authorized-user.controller";

@Module({
  imports: [AuthorizedUserControllerModule],
})
export class RestControllerModuler {}