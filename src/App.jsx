import React from 'react'
import Navbar from './components/navbar/Navbar'
import "../src/index.css"
import Main from './components/main/Main'
import Section from './components/secciones/Section'
import rodolfo from "../src/components/secciones/rodolfo.jpg"
import delfina from "../src/components/secciones/delfina.jpg"
import sebastian from "../src/components/secciones/sebastian.jpg"

import mision from "../src/components/secciones/our-mission.png"
import vision from "../src/components/secciones/vision.jpg"
import values from "../src/components/secciones/values.jpg"
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Section number={'1'} img={delfina} title={"CEO & CSO"}  texto={"Gallardo, María Delfina (BSc. Biotechnologist and Molecular Biologist."}/>
      <Section number={'2'} img={rodolfo} title={"SCIENTIFIC ADVISOR"}  texto={"Goya, Rodolfo Gustavo (PhD in Biochemistry, Head of Rejuvenation and Anti-aging group, School of Medicine, National University of La Plata."}/>
      <Section number={'1'} img={sebastian} title={"PARTNER IN SCIENCE AND DEVELOPMENT"}  texto={"Piscitelli, Sebastián. Sebastián Cippitelli, Managing Director of 1mPossible, is a visionary dedicated to pushing the boundaries in science and biomedicine, with the bold mission of overcoming mortality."}/>
      
      <Section number={'1'} img={mision} title={"Mission"}  texto={"Our mission as a healthTech company is to drive innovation in biotechnology to develop effective solutions that comprehensively address the challenges associated with patient aging and achieve rejuvenation. We are committed to providing advanced treatments that enhance people's quality of life, prolong vitality, and promote health across all stages of life."}/>
      <Section number={'1'} img={vision} title={"Vision"}  texto={"IuvenisBio is driven to lead in the pursuit of revolutionary solutions for complex medical challenges. We envision a future where neurodegenerative diseases, infertility, and other effects of aging are effectively treated, empowering people to live healthier and more fulfilling lives. We seek to transform healthcare by focusing on not just prolonging life but also promoting vitality and enhancing the enjoyment of every moment."}/>
      <Section number={'1'} img={values} title={"Values:"}  texto={"At IuvenisBio, our core values guide every aspect of our work. We are committed to scientific excellence, ethics, and integrity in all our research and practices. We value collaboration, creativity, and dedication in the pursuit of innovative solutions. Additionally, we are committed to social responsibility and making a positive impact in the community, working tirelessly to enhance the health and well-being of people worldwide."}/>

      <Footer/>
    </div>
  )
}

export default App
