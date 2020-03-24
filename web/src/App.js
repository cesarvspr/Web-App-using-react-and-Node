import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// componente : bloco isolado de HTML CSS e JS q nao interfere no restante da aplicacao 
// estado: infromacoes mantidas pelo componente (lembrar imutabilidade)
// propriedade:  informacoes que um componente pai passa para o componente filho


  

function App() {

  
  

  const [devs, setDevs] = useState([]);

  useEffect(() =>  {
    async function loadDevs() {
      const response = await  api.get('/Devs');
      setDevs(response.data);
    }
  loadDevs();
  }, []);





  async function handdleAddDev(data) {
    


    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]); //Atualizada a pagina caso seja adicionado um novo usuario 
  }



  return (
    <div id="app">
       <aside>
         <strong>Create account</strong>
         <DevForm onSubmit={handdleAddDev}/>
         
      </aside>
      <main>
        <ul>
          {devs.map( dev => (          
              <DevItem  key = {devs._id}  dev = { dev }/>
          ))}



          
        
         

        </ul>
      </main>
    </div>
  );
}

export default App;
