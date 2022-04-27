import React from 'react';

// Vamos a ver 3 maneras de renderizado condicional.

// Directa    { algo && Loquesea   }
// Ternaria
// Por función

const Directa = () => {
  const [mostrarUsuarios, setMostrarUsuarios] = React.useState(true);
  const componente = <span>Hola Mundo desde un renderizado Directa!</span>;
return(

    <div>
     
{/* Primero se asegura que mostrarUsuarios sea verdadero; en dado caso que no lo sea, termina la condición y no llega al componente. */}
{/* Cuando sí es verdadero, llega al componente, verifica que exista (sí existe en este caso) y como es la última condición que hay, la imprime.  */}
    
 { mostrarUsuarios &&  componente  }



    </div>
)

}

export default  Directa;



