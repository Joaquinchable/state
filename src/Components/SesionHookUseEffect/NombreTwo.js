/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";

const NombreTwo = (props) => {

// useEffect: accediendo al ciclo  de vida de nuestro componente
// fases de montaje, actualización y desmontaje En componente de class para ciclo de vida 
// useEffect no ayuda fases de montaje, actualización y desmontaje en componente Funcionales

// useEffect  un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, 
// ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.

const didMount = () => {
    console.log('Te damos la bienvenida ' + props.nombre);
 };
 React.useEffect(didMount, []);

 const willUnmount = () => {
    return () => {
       console.log('Adiós');
    }
 };
 React.useEffect(willUnmount, []);

  return (
    <div>
      {props.nombre}
      <button onClick={props.borrarNombreDeLista}>X</button>
    </div>
  );
};

NombreTwo.propTypes = {
  nombre: PropTypes.string.isRequired,
  borrarNombreDeLista: PropTypes.func.isRequired,
};

export default NombreTwo;
