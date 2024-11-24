import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';
import { TesteService } from './teste/teste.service';

@Module({
  imports: [],
  controllers: [AppController, TesteController],
  providers: [AppService, TesteService],
})
export class AppModule {}
