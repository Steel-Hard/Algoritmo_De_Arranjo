import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';
import { TesteService } from './teste/teste.service';
import { HeapController } from './heap/heap.controller';
import { HeapService } from './heap/heap.service';

@Module({
  imports: [],
  controllers: [AppController, TesteController, HeapController],
  providers: [AppService, TesteService, HeapService],
})
export class AppModule {}
