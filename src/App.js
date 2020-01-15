import React, { useState } from 'react';

// Componente: Bloco usolado de HTML, CSS e JS, no qual não interfere no restante da aplicação...
// Propriedade: E como se fosse os atributos das tags HTML, para podemos enviar informarções pela {props} que são os argumentos de componente
// Estado: São as informaçaões mantida pelos componentes(Lembrar: imutabilidade )

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCount}>Incrementar</button>
    </>
  );
}

export default App;
