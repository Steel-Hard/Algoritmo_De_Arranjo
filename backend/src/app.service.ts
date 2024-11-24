import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private resultados: number[][] = []; // Armazena os arranjos
  getHello(): string {
    return 'Hello World!';
  }

  // Função principal para gerar arranjos
  async gerarArranjos(
    arr: number[],
    tamanhoArranjo: number,
  ): Promise<number[][]> {
    this.resultados = []; // Limpar resultados antes de gerar novos arranjos
    const arranjos = this.gerarArranjosAux(arr, tamanhoArranjo, 0, []); // Gerar arranjos de tamanho fixo
    const arrSemDuplicados = Array.from(new Set(arranjos));

    return arrSemDuplicados; // Retorna os arranjos gerados
  }

  private gerarArranjosAux(
    arr: number[],
    tamanhoArranjo: number,
    inicio: number,
    arrTemp: number[],
  ): number[][] {
    const arranjos: number[][] = [];

    // Se o arranjo tiver o tamanho desejado, armazena ele
    if (arrTemp.length === tamanhoArranjo) {
      arranjos.push([...arrTemp]);
      return arranjos;
    }

    const elementosUsados = new Set<number>(); // Para evitar usar o mesmo elemento duas vezes

    // Percorre os elementos do array e gera arranjos
    for (let i = inicio; i < arr.length; i++) {
      // Se o elemento já foi usado antes, ignoramos ele
      if (elementosUsados.has(arr[i])) continue;

      // Marca o elemento como usado
      elementosUsados.add(arr[i]);

      // Inclui o elemento atual no arranjo
      arrTemp.push(arr[i]);

      // Chama recursivamente para gerar o próximo elemento do arranjo
      arranjos.push(
        ...this.gerarArranjosAux(arr, tamanhoArranjo, i + 1, arrTemp),
      );

      // Remove o elemento (backtrack) para tentar novas combinações
      arrTemp.pop();
    }

    return arranjos;
  }
}
