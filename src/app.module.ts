import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigServiceModule } from './app/infracture/config/config.service.module';
import { RestControllerModuler } from './app/controller/rest-api/rest-controller.module';

@Module({
  imports: [ConfigServiceModule, RestControllerModuler],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
