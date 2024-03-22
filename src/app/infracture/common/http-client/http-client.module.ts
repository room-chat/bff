import { Module } from "@nestjs/common";
import { HttpClientService } from "./http-client";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  exports: [HttpClientService],
  providers: [HttpClientService]
})
export class HttpClientServiceModule{}