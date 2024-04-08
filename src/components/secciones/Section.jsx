import React from 'react'

const Section = (props) => {
  return (
     <div className='Section_1' id={`Section_${props.number}`}>
      <div className="wrapper-image">
        <img src={props.img} alt="" />
      </div>
      <div className="wrapper-text">
        <div className="wrapper-text-h2">
          <h2>{props.title}</h2>
        </div>
        <div className='wrapper-text-p'>
          <p>
           {props.texto}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section
