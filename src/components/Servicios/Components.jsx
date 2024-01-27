import React from 'react'

const Components = ({props}) => {


  return (
    <div className={`servicios ${props.link_class} ${props.main}`} id={props.link_a}>
    
    <div className='criogenia' id={props.id_css}>
        
        <div className="main-text" >
          <div className="main-text-p">
            <h2>{props.title}</h2>
            <p>
              {props.texto_p}
            </p>

            <div className='main-text-button' onClick={() => handleButtonClick(props.link, props.title)}>
            {props.link ? (
              <a href={`/${props.link}/`}>Ver Más Información</a>
            ) : (
              <a href={`/${props.title}`}>Ver Más Información</a>
            )}

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
