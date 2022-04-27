import React from 'react';
// import ContadorClass from './Components/CicloDeVida/contador'
// import ContadorHook from './Components/SesionHooks/contador2'
// import ListadeNombres from './Components/CicloDeVida/ListaNombre'
// import ListadeNombresHooks from './Components/SesionHooks/ListaEscuelaNombresHooks'
import ListaNUF from './Components/SesionHookUseEffect/LsitaNombreUEF';
import Directa  from './Components/SesionHookUseEffect/llamadasCondicionales';
import Ternaria  from './Components/SesionHookUseEffect/Ternaria';
import RpFuncion from './Components/SesionHookUseEffect/rPorFuncion'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ContadorHook/>
      <br/>   <br/>
     <ContadorClass/>
     <br/>   <br/>
     <ListadeNombres/>
     <br/>

     <ListadeNombresHooks/>
     <br/> */}
     <ListaNUF/>
     <br/>
     <RpFuncion/>
     <br/>
     <Ternaria/>
    <br/>
     <Directa/>
    </div>
  );
}

export default App;
