import { instance } from "./index";

class CalcularArranjo {
  static async obterArranjo(array: number[],tamanho:number) {
    try {
      const {data} = await instance.post("/", { arr: array,tamanho});
      return data;
      
    } catch (err) {
      console.log(err);
    }
  }
}

export default CalcularArranjo;
