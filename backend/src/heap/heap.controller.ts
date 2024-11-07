import { Body, Controller, Post } from '@nestjs/common';
import { HeapService } from './heap.service';
@Controller('heap')
export class HeapController {
  constructor(private readonly heapService: HeapService) {}
  @Post()
  async calcularComHeap(@Body() body: { arr: number[] }) {
    const { arr } = body;
    const resultado = this.heapService.gerarPermutacoesHeap(arr);
    return resultado;
  }
}
