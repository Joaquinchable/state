import React from 'react'


//  renderizado Por Funcion  funcion (Nombre)  { Nombrefuncion()}

const RPorFuncion = () => {

    const [mostrarUsuarios, setMostrarUsuarios] = React.useState(true);

    const componente = <span>Hola Mundo desde un renderizado por funcion!</span>;
    const noHay = 'No hay nada';


    const renderizarUsuarios = () => {
        if (mostrarUsuarios) return componente;
    
        return noHay;
    }



  return (
      <div>
        {renderizarUsuarios()}
     </div>
  )
}


export default RPorFuncion