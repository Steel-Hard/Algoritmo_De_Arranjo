import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  gerarArranjos<T>(array: T[], tamanho: number): T[][] {
    // Função auxiliar para gerar arranjos recursivamente
    function auxiliar(parcial: T[], restante: T[]): T[][] {
      if (parcial.length === tamanho) {
        return [parcial];
      }

      const resultados: T[][] = [];
      for (let i = 0; i < restante.length; i++) {
        const novoParcial = [...parcial, restante[i]];
        const novoRestante = [
          ...restante.slice(0, i),
          ...restante.slice(i + 1),
        ];
        resultados.push(...auxiliar(novoParcial, novoRestante));
      }
      return resultados;
    }

    return auxiliar([], array);
  }
}
