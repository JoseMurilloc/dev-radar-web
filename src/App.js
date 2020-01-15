import React from 'react';

// Componente: Bloco usolado de HTML, CSS e JS, no qual não interfere no restante da aplicação...
// Propriedade: E como se fosse os atributos das tags HTML, para podemos enviar informarções pela {props} que são os argumentos de componente
// Estado: São as informaçaões mantida pelos componentes(Lembrar: imutabilidade )

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          {/* Inputs com o contudos do JSON create POST Dev */}
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/> 
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/> 
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/> 
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/> 
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
