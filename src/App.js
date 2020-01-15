import React, { useEffect, useState } from 'react';

// Componente: Bloco usolado de HTML, CSS e JS, no qual não interfere no restante da aplicação...
// Propriedade: E como se fosse os atributos das tags HTML, para podemos enviar informarções pela {props} que são os argumentos de componente
// Estado: São as informaçaões mantida pelos componentes(Lembrar: imutabilidade )

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [ github_username, setGithubUsername ] = useState('');
  const [techs, setTechs ] = useState('');
  const [ latitude, setLatitude] = useState('');
  const [ longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      }, 
      {
        timeout: 30000,
      }
    )
  }, []);

  async function  handleAddDev(e) {
    e.preventDefault();
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          {/* Inputs com o contudos do JSON create POST Dev */}
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)} /> 
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/> 
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/> 
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/> 
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/43470555?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>José Murillo</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic iure similique ex natus et </p>
            <a href="https://github.com/JoseMurilloc">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/43470555?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>José Murillo</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>#nodejs</p>
            <a href="https://github.com/JoseMurilloc">Acessar perfil no Github</a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/43470555?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>José Murillo</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>#nodejs</p>
            <a href="https://github.com/JoseMurilloc">Acessar perfil no Github</a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/43470555?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>José Murillo</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>#nodejs</p>
            <a href="https://github.com/JoseMurilloc">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
