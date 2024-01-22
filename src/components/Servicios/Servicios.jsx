import React from 'react';
import Components from './Components';

const Servicios = (props) => {
  return (
    <>
    {
      !props.render &&  <div className='title-components title-h1' id={props.section}>
      <div className="title-wallpaper"></div>
      <h1>{props.section}</h1>
    </div>
    }
     

      {props.title_special && 
      <div className='title-h1'>
        <div className="title-wallpaper"></div>
        <h1>{props.title_special}</h1>
      </div>}

      {props.componentes.map((i) => {
        return <Components key={i.title} props={i} />;
      })}
    </>
  );
};

export default Servicios;
