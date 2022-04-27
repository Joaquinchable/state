import React, { useState } from "react";

const MainApp = () => {
  const [nombre, setNombre] = useState(" ");
  const [state, setState] = useState({
    profes: 0,
    alumnos: 0,
  });

  const editarNombre = (event) => setNombre(event.target.value);

  const editarState = (atributo) => (event) =>
    setState({
      ...state,
      [atributo]: event.target.value,
    });

  // const editarProfes = (event) => setState({
  //     ...state,
  //     profes: event.target.value

  // })

  // const editarAlumnos = (event) => setState({
  //     ...state,
  //     alumnos: event.target.value

  // })

  return (
    <div>
      <input
      value={nombre}
      onChange={editarNombre} />
      {nombre}
      <br />

      <input type="number"
      value={state.profes}
      onChange={editarState("profes")} />
      {state.profes}
      <br />

      <input 
      value={state.alumnos}
      type="number" onChange={editarState("alumnos")} />
      {state.alumnos}
      <br />
    </div>
  );
};

export default MainApp;
