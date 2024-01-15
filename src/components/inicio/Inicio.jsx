import React from 'react'
// import logo_square from "../inicio/1mPossible.jpg"
import logo_square from "../inicio/logo_nuevo_fondo.jpg"
import portada from '../inicio/portada.jpg'

const Inicio = () => {
  return (
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
                    "Explorando la Inmortalidad: Ciencia Vanguardista en <b>1mPossible</b>."</h2>
                </div>
            </div>

            <div className="inicio-text-title mobile-text">
            <h2>
                    "Explorando la Inmortalidad: Ciencia Vanguardista en <b>1mPossible</b>."</h2>
            </div>

            {/* <div className="mobile-img">
                <img src={logo_square} alt="" />
            </div> */}

    </div>
        
    // </div>
  )
}

export default Inicio
