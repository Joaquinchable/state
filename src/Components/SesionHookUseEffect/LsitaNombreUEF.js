/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import NombreTwo from "./NombreTwo";

// Pasar de stateful (clase) a stateless (función).
// Usar useState para los estados
// Recrear los ciclos de vida con hooks.
// Tener los useState y useEffect que quieras.
// PostWork Revisar incidencias del sistema de listanombreUseEffect Los alert de bienvenida y despedida 

const LsitaNombreUEF = () => {
  const [state, setState] = React.useState({
    nombre: " ",
    mensaje: " ",
    listaNombres: ["Bedu"],
  });


  const didUpdate = () => {
       setState({
        ...state,
        mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
    })

  }

  React.useEffect( didUpdate, [state.listaNombres]);



  //funcion para mi input
  const handleInputChange = (event) => {
    setState({
     ...state,
      nombre: event.target.value,
    });
  };

  //funcion de boton para Agregar el Nombre a la lista
  const handleClick = () => {
    const nombreEnEstado = state.nombre;
    if (!nombreEnEstado) return;

    const listaActualizada = [...state.listaNombres, nombreEnEstado];

    setState({
      ...state,
      nombre: " ",
      listaNombres: listaActualizada,
    });
  };

  // Funcion para borrar un nombre de la lista
  const borrarNombreDeLista = (key) => {
    const copiaDeLista = [...state.listaNombres];
    copiaDeLista.splice(key, 1);

    setState({
        ...state,
      listaNombres: copiaDeLista,
    });
  };


  return (
    <div>
      {state.mensaje}
      <br />
      <input value={state.nombre} onChange={handleInputChange} />
      <button onClick={handleClick}>Agregar</button>

      <ul>
        {state.listaNombres.map((nmbr, key) => (
          <li key={key}>
            <NombreTwo
              nombre={nmbr}
              borrarNombreDeLista={() => borrarNombreDeLista(key)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LsitaNombreUEF;
