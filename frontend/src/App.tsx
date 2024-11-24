import { useState } from "react";
import calcularArranjo from "./services/calcularArranjo";

function App() {
  const [number, setNumber] = useState<string>('');
  const [tamanho, setTamanho] = useState<string>('0');
  const [array, setArray] = useState<number[]>([]);
  const [items, setItems] = useState<number[][]>([]); 


  const calcular = async () => {
    const data = await calcularArranjo.obterArranjo(array,parseInt(tamanho));
    // Verifique se a resposta é um array bidimensional (array de arrays)
    if (Array.isArray(data) && Array.isArray(data[0])) {
      setItems(data); // Se for um array de arrays, armazene como está
    } else {
      console.error("A resposta não é um array bidimensional");
    }
  };

  return (
    <>  
      <div className="container">
        <h1>Algoritmo De Arranjo</h1>
      </div>
      <div className="container">
        <h3>Seu Array de Números:</h3>
        <div className="escolhas">
          [{array.join(", ")}]
        </div>
      </div>

      <div className="container">
      <input
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
          placeholder="Entre com  o tamanho"
          type="number"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Entre com um número"
          type="number"
        />
        <button
          onClick={() => {
            if (number) {
              setArray([...array, parseInt(number)]);
              setNumber(''); // Limpa o input após adicionar
         
            }
          }}
        >
          Enviar
        </button>
        <button
          onClick={() => {
            setArray([]);
          }}
        >
          Limpar
        </button>
      </div>

      <div className="container">
        <button onClick={calcular}>Calcular Arranjo</button>
      </div>

      <div className="container">
        {items.length > 0 ? (
          <div>
            <h3>Resultados:</h3>
            {/* Iterando sobre o array bidimensional e exibindo cada array interno */}
            {items.map((innerArray, i) => (
              <div key={i}>
                [{innerArray.join(", ")}]
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum resultado ainda.</p>
        )}
      </div>
    </>
  );
}

export default App;
