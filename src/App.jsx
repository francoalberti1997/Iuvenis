import React from 'react'
import Navbar from './components/navbar/Navbar'
import "../src/index.css"
import Main from './components/main/Main'
import Section from './components/secciones/Section'
import rodolfo from "../src/components/secciones/rodolfo.jpg"
import delfina from "../src/components/secciones/delfina.jpg"
import sebastian from "../src/components/secciones/sebastian.jpg"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Section number={'1'} img={delfina} title={"CEO & CSO"}  texto={"Gallardo, María Delfina (BSc. Biotechnologist and Molecular Biologist."}/>
      <Section number={'2'} img={rodolfo} title={"SCIENTIFIC ADVISOR"}  texto={"Goya, Rodolfo Gustavo (PhD in Biochemistry, Head of Rejuvenation and Anti-aging group, School of Medicine, National University of La Plata."}/>
      <Section number={'1'} img={sebastian} title={"PARTNER IN SCIENCE AND DEVELOPMENT"}  texto={"Piscitelli, Sebastián. Sebastián Cippitelli, Managing Director of 1mPossible, is a visionary dedicated to pushing the boundaries in science and biomedicine, with the bold mission of overcoming mortality."}/>
    </div>
  )
}

export default App
