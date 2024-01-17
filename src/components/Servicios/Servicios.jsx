import React from 'react';
import Components from './Components';

const Servicios = (props) => {
  return (
    <>
      <div className='title-components' id={props.section}><h1>{props.section}</h1></div>

      {props.componentes.map((i) => {
        return <Components key={i.title} props={i} />;
      })}
    </>
  );
};

export default Servicios;
