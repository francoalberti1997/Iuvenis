import React, { useState } from 'react'
import logo from "../navbar/logo.jpg"

const Navbar = ({toggleLanguage, clickLanguage}) => {

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
                <p>New Therapeutics</p>
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
                            <a class="number-info whats-app" href="https://wa.me/+541136219725?text=¡Hola! Me gustaría obtener más información." target="" id="wsp"><p className='number-info'> +541136219725</p></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="second-line">
            <div className="nav-section"><p><a href='/#Home'> Home</a></p></div>
            <div className="nav-section"><p><a href='/#Investigación'> Investigación</a></p></div>
            <div className="nav-section"><p><a href="/#Nosotros"> Nosotros</a></p></div>
            <div className="nav-section"><p><a href="/#Misión">Misión</a></p></div>
        </div>
        
        <div id="second-line-burguer" className={clicked ? 'active' : ''}>  
          
            <div className='nav-section-burguer'>
            <div className="nav-section" onClick={toggleMenu}><p><a href='/#Home'>Home</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href='/#Investigación'>Investigación</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href="/#Nosotros"> Nosotros</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href="/#Mision">Mision</a></p></div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
