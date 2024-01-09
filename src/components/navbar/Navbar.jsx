import React from 'react'
import logo from "../navbar/1mPossible.png"

const Navbar = () => {
  return (
    <nav>
        <div className="first-line">
            <div className="container-nav logo">
                <img src={logo} alt="" />
                <p>1ra compañía en Argentina</p>
            </div>
            <div className="container-nav info">
                <div className="info-contacto">
                    <div className="phone">
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
        
    </nav>
  )
}

export default Navbar
