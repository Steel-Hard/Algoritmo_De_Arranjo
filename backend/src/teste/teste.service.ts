import { Injectable } from '@nestjs/common';

@Injectable()
export class TesteService {
  private resultados: number[][] = []; // Armazena os arranjos permutados

  // Modificando para aceitar o parâmetro 'tamanhoArranjo'
  async gerarArranjos(arr: number[], tamanhoArranjo: number): Promise<number[][]> {
    this.resultados = []; // Limpar resultados antes de gerar novos arranjos
    const arranjos = this.gerarArranjosAux(arr, tamanhoArranjo, 0, []); // Gerar arranjos de tamanho fixo
    // Para cada arranjo gerado, realizamos as permutações
    arranjos.forEach((arranjo) => {
      this.permutar(arranjo, 0, arranjo.length);
    });
    return this.resultados; // Retorna as permutações dos arranjos
  }

  // Função auxiliar para gerar arranjos de tamanho fixo
  private gerarArranjosAux(
    arr: number[],
    tamanhoArranjo: number,
    inicio: number,
    arrTemp: number[],
  ): number[][] {
    const arranjos: number[][] = [];
    
    if (arrTemp.length === tamanhoArranjo) {
      // Quando o tamanho do arranjo atingir o desejado, armazenamos o arranjo
      arranjos.push([...arrTemp]);
      return arranjos;
    }

    // Percorre os elementos do array e gera arranjos
    for (let i = inicio; i < arr.length; i++) {
      // Inclui o elemento atual no arranjo
      arrTemp.push(arr[i]);

      // Chama recursivamente para gerar o próximo elemento do arranjo
      arranjos.push(...this.gerarArranjosAux(arr, tamanhoArranjo, i + 1, arrTemp));

      // Remove o elemento (backtrack) para tentar novas combinações
      arrTemp.pop();
    }

    return arranjos;
  }

  // Função para gerar permutações de um arranjo
  private permutar(arr: number[], inicio: number, fim: number): void {
    if (inicio === fim) {
      // Quando a profundidade chegar ao final, armazenamos uma cópia do arr
      this.resultados.push([...arr]);
    } else {
      // Caso contrário, trocamos os elementos em todas as posições possíveis
      for (let i = inicio; i < fim; i++) {
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
