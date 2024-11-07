import { Injectable } from '@nestjs/common';

@Injectable()
export class HeapService {
  async gerarPermutacoesHeap(arr: number[]): Promise<number[][]> {
    const resultados: number[][] = [];
    this.permutarHeap(arr.length, arr, resultados);
    return resultados;
  }

  private permutarHeap(n: number, arr: number[], resultados: number[][]): void {
    if (n === 1) {
      // Quando o tamanho do array for 1, salva a permutação
      resultados.push([...arr]);
      return;
    }

    for (let i = 0; i < n; i++) {
      // Recursivamente permutamos para o sub-array
      this.permutarHeap(n - 1, arr, resultados);

      // Se n é ímpar, trocamos o primeiro e o último
      // Se n é par, trocamos o i-ésimo e o último
      if (n % 2 === 1) {
        [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
      } else {
        [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
      }
    }
  }
}
