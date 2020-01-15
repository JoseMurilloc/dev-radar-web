import React from 'react';

// Componente: Bloco usolado de HTML, CSS e JS, no qual não interfere no restante da aplicação...
// Propriedade: E como se fosse os atributos das tags HTML, para podemos enviar informarções pela {props} que são os argumentos de componente

import Header from './Header';

function App() {
  return (
    <Header title="Dashboard" />
  );
}

export default App;
