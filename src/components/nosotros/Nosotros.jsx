import React from 'react'
import logo from "../navbar/logo.jpg"

const Nosotros = (props) => {
  return (
    <div class="about-company-section" id={"Nosotros"}>
      <div class="about-image">
        <img src={logo} alt="Persona de negocios" />
      </div>
      <div class="about-content">
        <h2>Nosotros</h2>
        <p>Nuestra misión, como compañía healthTech, es impulsar la innovación en biotecnología para desarrollar soluciones eficaces que aborden de manera integral las problemáticas asociadas al envejecimiento del paciente, así como también, lograr su rejuvenecimiento. Nos comprometemos a ofrecer tratamientos avanzados que mejoren la calidad de vida de las personas, prolongando la vitalidad y promoviendo la salud en todas las etapas de la vida.</p>
        <div class="about-buttons">
          <button class="btn book-call"><a class="" href="https://wa.me/+541136219725?text=¡Hola! Me gustaría obtener más información." target="" id="wsp"><p className=''>Agendar una reunión</p></a></button>
        </div>
      </div>
    </div>
    
  )
}

export default Nosotros
