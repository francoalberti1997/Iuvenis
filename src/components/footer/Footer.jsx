import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="footer" id='Contacto'>
    <div class="footer-left">
        <p><i class="fas fa-map-marker-alt"></i>Buenos Aires, Argentina</p>
        <p className='phone-wsp-i'><i class="fas fa-phone"></i><a class="number-info whats-app" href="https://wa.me/+541136219725?text=¡Hola! Me gustaría obtener más información." target="" id="wsp"><p className='number-info'> +541136219725</p></a></p>
        <p><i class="fas fa-envelope"></i> inquiries.1mpossible@gmail.com </p>
    </div>
    <div class="footer-right">
        <h3>Sobre la Organización</h3>
        <p>Excelencia científica, ética e integridad.</p>
        <div class="social-links">
        <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    </footer>
    <p><a href="https://francoalberti1997.vercel.app/">Desarrollado por Alberti Code</a></p>
</>
  )
}

export default Footer
