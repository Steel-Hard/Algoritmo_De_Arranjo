import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async calcularPermutacao(
    @Body() body: { arr: number[]; tamanho: number },
  ): Promise<number[][]> {
    const { arr, tamanho } = body;
    const resultado = this.appService.gerarArranjos(arr, tamanho);
    return resultado;
  }
}
