import React, { useEffect, useState } from 'react';
import api from './services/axios';

// Componente: Bloco usolado de HTML, CSS e JS, no qual não interfere no restante da aplicação...
// Propriedade: E como se fosse os atributos das tags HTML, para podemos enviar informarções pela {props} que são os argumentos de componente
// Estado: São as informaçaões mantida pelos componentes(Lembrar: imutabilidade )

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [ devs, setDevs ] = useState([]);

  useEffect(() => {
    // Não pode usar async no useEffect
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    } 

    loadDevs();
  }, []);

  async function  handleAddDev(data) {
    
    const response = await api.post('/devs', data);
    
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
