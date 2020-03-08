import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// componente : bloco isolado de HTML CSS e JS q nao interfere no restante da aplicacao 
// estado: infromacoes mantidas pelo componente (lembrar imutabilidade)
// propriedade:  informacoes que um componente pai passa para o componente filho
  

function App() {

  return (
    <div id="app">
       <aside>
         <strong>Create account</strong>
         <form>
          <div class= "input-block">
            <label htmlFor="github_username">GitHub user</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class= "input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required /> 
          </div>


            <div className="input-group">
              <div class= "input-block">
                <label htmlFor="latitude">latitude</label>
                <input name="latitude" id="latitude" required /> 
              </div>

              <div class= "input-block">
                <label htmlFor="longitude">longitude</label>
                <input name="longitude" id="longitude" required /> 
              </div>
            </div>
            <button type="submit">Save</button>
          
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37849741?s=460&v=4" alt="cesao" />
              <div className="user-info">
                <strong>CESAO </strong>
                <span>ReactJS, IA, STONKS</span>
              </div> 
            </header>
                <p>minha bio bio bio bio bio bio bio</p>
                <a href="https://github.com/cesarvspr">Acess GitHub profile</a>

                
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37849741?s=460&v=4" alt="cesao" />
              <div className="user-info">
                <strong>CESAO </strong>
                <span>ReactJS, IA, STONKS</span>
              </div> 
            </header>
                <p>minha bio bio bio bio bio bio bio</p>
                <a href="https://github.com/cesarvspr">Acess GitHub profile</a>

                
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37849741?s=460&v=4" alt="cesao" />
              <div className="user-info">
                <strong>CESAO </strong>
                <span>ReactJS, IA, STONKS</span>
              </div> 
            </header>
                <p>minha bio bio bio bio bio bio bio</p>
                <a href="https://github.com/cesarvspr">Acess GitHub profile</a>

                
          </li>
    
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37849741?s=460&v=4" alt="cesao" />
              <div className="user-info">
                <strong>CESAO </strong>
                <span>ReactJS, IA, STONKS</span>
              </div> 
            </header>
                <p>minha bio bio bio bio bio bio bio</p>
                <a href="https://github.com/cesarvspr">Acess GitHub profile</a>

                
          </li>


        </ul>
      </main>
    </div>
  );
}

export default App;
