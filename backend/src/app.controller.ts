import { Controller, Get, Body, HttpStatus } from '@nestjs/common';
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
  ): Promise<number[][] | any> {
    const { arr, tamanho } = body;
    if (tamanho > arr.length) {
      return {
        status: HttpStatus.BAD_REQUEST, // Erro 400 caso o tamanho seja maior que o número de elementos no array
        mensagem:
          'O tamanho não pode ser maior que o número de elementos no array.',
      };
    }
    const resultado = this.appService.gerarArranjos(arr, tamanho);
    return resultado;
  }
}
