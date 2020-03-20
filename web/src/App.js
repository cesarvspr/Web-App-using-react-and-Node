import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


// componente : bloco isolado de HTML CSS e JS q nao interfere no restante da aplicacao 
// estado: infromacoes mantidas pelo componente (lembrar imutabilidade)
// propriedade:  informacoes que um componente pai passa para o componente filho


  

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_Username] = useState('');
  const [techs, setTechs] = useState('');
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;
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
  }, []
  );


  async function handdleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
  console.log(response.data);    
  }



  return (
    <div id="app">
       <aside>
         <strong>Create account</strong>
         <form>
          <div className= "input-block">
            <label htmlFor="github_username">GitHub user</label>
            <input 
            name="github_username" 
            id="github_username" 
            required value={github_username}
            onChage={e=>setGithub_Username(e.target.value)} 
            />
          </div>

          <div className= "input-block">
            <label htmlFor="techs">Techs</label>
            <input 
            name="techs" 
            id="techs" 
            required value={techs}
            onChage={e => setTechs(e.target.value)}
            /> 
          </div>


            <div className="input-group">
              <div className= "input-block">
                <label htmlFor="latitude">latitude</label>
                <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required value={latitude}
                onChage={e => setLatitude(e.target.value)} 
                /> 
              </div>

              <div className= "input-block">
                <label htmlFor="longitude">longitude</label>
                <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required value={longitude} 
                onChage={e => setLongitude(e.target.value)}
                /> 
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
