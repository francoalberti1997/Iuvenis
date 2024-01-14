import React, { useState } from 'react'
import logo from "../navbar/1mPossible.png"
import logo_new from "../inicio/logo_nuevo.jpg"

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setClicked(!clicked);
        document.documentElement.classList.toggle('menu-active', clicked);
    };
  return (
    <nav>
        <div className="first-line">
            <div className="container-nav logo">
                <div className="logo-imagen"><img src={logo} alt="" /></div>
                <p>Leading research</p>
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
                            <p className='mail-info'>inquiries.1mpossible@gmail.com</p>
                            <a class="number-info whats-app" href="https://wa.me/+5491169732194?text=¡Hola! Me gustaría obtener más información." target="" id="wsp"><p className='number-info'>+5491169732194</p></a>
                        </div>
                    </div>

                    <div className="select_lg">
                        <div className="text-languaje">ENG</div>
                        <div className="icon-language"><i class="fa fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="second-line">
            <div className="nav-section"><p><a href="">Inicio</a></p></div>
            <div className="nav-section"><p><a href="">Investigación</a></p></div>
            <div className="nav-section"><p><a href="">Colaboradores</a></p></div>
            <div className="nav-section"><p><a href="">Mision</a></p></div>
            <div className="nav-section"><p><a href="">Contacto</a></p></div>
        </div>
        
        <div id="second-line-burguer" className={clicked ? 'active' : ''}>
            <div id="img-banner" className={clicked ? 'active' : ''}>
                <div className="logo-imagen-section"><img src={logo_new} alt="" /></div>
            </div>
                
            <div className='nav-section-burguer'>
                <div className="nav-section"><p><a href="/">Inicio <i class="fa fa-home" aria-hidden="true"></i></a></p></div>
                <div className="nav-section"><p><a href="">Investigación <i class="fa fa-flask" aria-hidden="true"></i></a></p></div>
                <div className="nav-section"><p><a href="">Colaboradores <i class="fa fa-search" aria-hidden="true"></i></a></p></div>
                <div className="nav-section"><p><a href="">Mision <i class="fa fa-check" aria-hidden="true"></i></a></p></div>
                <div className="nav-section"><p><a href="">Contacto <i class="fa fa-user-o" aria-hidden="true"></i></a></p></div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
