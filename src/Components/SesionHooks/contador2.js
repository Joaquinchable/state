import React, { useState } from "react";
import Boton from "./../CicloDeVida/boton";

const ContadorHook = (props) => {
    // EL Hook useState() nos da dos cosas el :
  //    State         "setState"
  //   inicia Stado   actuliza el estado
  const [contador, setContador] = useState(100);


  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div>
        Estado con Hooks
        <br/>
      {contador}
      <br/>
      <Boton texto={contador} handleClick={handleClick} />
    </div>
  );
};

export default ContadorHook;
