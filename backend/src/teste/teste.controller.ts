import { Body, Controller } from '@nestjs/common';
import { TesteService } from './teste.service';
import { Post } from '@nestjs/common';

@Controller('calcular')
export class TesteController {
  constructor(private readonly testeservice: TesteService) {}

  @Post()
  async calcularPermutacao(
    @Body() body: { arr: number[]; tamanho: number },
  ): Promise<number[][]> {
    const { arr, tamanho } = body;
    const resultado = this.testeservice.gerarArranjos(arr, tamanho);
    return resultado;
  }
}
