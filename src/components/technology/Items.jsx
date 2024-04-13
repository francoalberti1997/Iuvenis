import React from 'react';

const Items = (props) => {
  return (
    <div className="feature-card">
        <div class="icon user-friendly">
      </div>
      <div className="img-feature">
        <img src={props.foto} alt="" />
      </div>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Items;
