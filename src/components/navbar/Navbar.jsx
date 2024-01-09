import React, { useState } from 'react'
import logo from "../navbar/1mPossible.png"

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
    setClicked(!clicked);
    };


  return (
    <nav>
        <div className="first-line">
            <div className="container-nav logo">
                <div className="logo-imagen"><img src={logo} alt="" /></div>
                <p>1ra compañía en Argentina</p>
            </div>
            <div className="container-nav info">
                <div className="info-contacto">

                    <div id="mobile" onClick={toggleMenu}>
                        {clicked ? <i className='fa fas fa-times'></i> : <i className='fa fas fa-bars'></i>}
                    </div>

                    <div className="phone phone-active">
                        <div className="icon-phone">
                            <i class="fa fa-solid fa-phone"></i>
                        </div>
                        <div className="info-phone">
                            <p className='mail-info'>AlbertiFranco1997.Gmail.com</p>
                            <p className='number-info'>+541176385223</p>
                        </div>
                    </div>

                    <div className="select_lg">
                        <div className="text-languaje">ENG</div>
                        <div className="icon-language"><i class="fa fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second-line second-line-active">
            <div className="nav-section"><p><a href="">Inicio</a></p></div>
            <div className="nav-section"><p><a href="">Investigación</a></p></div>
            <div className="nav-section"><p><a href="">Colaboradores</a></p></div>
            <div className="nav-section"><p><a href="">Mision</a></p></div>
            <div className="nav-section"><p><a href="">Contacto</a></p></div>
        </div>

        
    </nav>
  )
}

export default Navbar
