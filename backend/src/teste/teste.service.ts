import { Injectable } from '@nestjs/common';

@Injectable()
export class TesteService {
  private resultados: number[][] = []; // Armazena as permutações

  async gerarPermutacoes(arr: number[]): Promise<number[][]> {
    this.resultados = []; // Limpar resultados antes de gerar novas permutações
    this.permutar(arr, 0, arr.length - 1); // Gerar as permutações
    return this.resultados; // Retornar as permutações geradas
  }

  private permutar(arr: number[], inicio: number, fim: number): void {
    if (inicio === fim) {
      // Quando a profundidade chegar ao final, armazenamos uma cópia do arr
      this.resultados.push([...arr]);
    } else {
      // Caso contrário, trocamos os elementos em todas as posições possíveis
      for (let i = inicio; i <= fim; i++) {
        // Troca o elemento 'inicio' com o elemento 'i'
        [arr[inicio], arr[i]] = [arr[i], arr[inicio]];

        // Recursivamente permuta o restante do array
        this.permutar(arr, inicio + 1, fim);

        // Volta a troca (backtrack), para tentar novas possibilidades
        [arr[inicio], arr[i]] = [arr[i], arr[inicio]];
      }
    }
  }
}
