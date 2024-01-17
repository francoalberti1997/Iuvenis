import React from 'react'

const Components = ({props}) => {
  return (
    <div className="servicios" >
    
    <div className='criogenia' id={props.id_css}>
        
        <div className="main-text" >
          <div className="main-text-p">
            <h2>{props.title}</h2>
            <p>
              <b>1mPossible</b> {props.texto_p}
            </p>

            <div className='main-text-button'>
              <a href={`/${props.title}/`}>Ver Más Información</a>
            </div>
          </div>
        </div>

        <div className="main-image">
          <img src={props.imagen} alt="" />
        </div>
        
    </div>
  </div>
  )
}

export default Components
