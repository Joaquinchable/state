import React from 'react';

// Terneria { algo  ?  loquesea : Loquesa si no hay el primer loquesa   }

const Ternaria = ( ) => {
    const [mostrarUsuarios, setMostrarUsuarios] = React.useState(true);

    const componente = <span>Hola Mundo desde un renderizado condicional Ternaria!</span>;
    const noHay = 'No hay nada';


  return (
    <div>

  {/* se renderizael  componente cuando la condición es verdadera pero tambien renderizamos algo más cuando es falsa condicion */}
        
  {mostrarUsuarios ? componente : noHay }



    </div>
  )
}



export default Ternaria;
