import React from 'react';
import Items from './Items';

const Technology = (props) => {
  return (
    <div className="tutorial-section" id={props.id_tec}>
      <div className="header">
        <div className="titulo-tecnologias">
          <h1>{props.titulo}</h1>
        </div>
      </div>
      <div className="features">
        {props.lista.map((item, index) => (
          <Items
            key={index} // Asegúrate de proporcionar una clave única para cada elemento en el bucle map
            nombre={item.nombre}
            descripcion={item.descripcion}
            foto={item.foto}
            titulo={item.titulo}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
