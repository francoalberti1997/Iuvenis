import React from 'react'
// import logo_square from "../inicio/1mPossible.jpg"
import logo_square from "../inicio/logo_nuevo.jpg"
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
                    <img src="https://i.pinimg.com/originals/8a/e2/ed/8ae2ede9e335295189021881938f2dac.gif" alt="" />
                </div>
            
                <div className="inicio-text-title">
                    <h2>
                    "Desafiando los Límites de la Ciencia: Nuestra Comprometida Investigación en Criogenia y Rejuvenecimiento."
                    </h2>
                </div>
            </div>

            <div className="inicio-text-title mobile-text">
                <h2>
                    Exploración Científica: <br /> Criogenia y Rejuvenecimiento
                </h2>
            </div>

            {/* <div className="mobile-img">
                <img src={logo_square} alt="" />
            </div> */}

        </div>

        
    // </div>
  )
}

export default Inicio
