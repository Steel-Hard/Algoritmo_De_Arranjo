import { instance } from "./index";

class CalcularArranjo {
  static async obterArranjo(array: number[]) {
    try {
      const {data} = await instance.post("/calcular", { arr: array });
      return data;
      
    } catch (err) {
      console.log(err);
    }
  }
}

export default CalcularArranjo;
