import React from 'react'
// import logo_square from "../inicio/1mPossible.jpg"
import logo_square from "../inicio/logo_mejorado.jpg"
import portada from '../inicio/portada.jpg'

const Inicio = () => {
  return (
    // <div className='inicio-main'>
        <div className='inicio'>
            <div className="inicio-wrapper-image">
                <img src={portada} alt="" />
            </div>
            <div className="inicio-text">
                <div className="inicio-text-image">
                    <img src={logo_square} alt="" />
                </div>
            
                <div className="inicio-text-title">
                    <h2>
                    "Desafiando los Límites de la Ciencia: Nuestra Comprometida Investigación en Criogenia y Rejuvenecimiento."
                    </h2>
                </div>
        </div>
        </div>

        
    // </div>
  )
}

export default Inicio
