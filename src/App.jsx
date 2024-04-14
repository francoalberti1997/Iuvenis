import React from 'react'
import Navbar from './components/navbar/Navbar'
import "../src/index.css"
import Main from './components/main/Main'
import Technology from './components/technology/Technology'
import Nosotros from './components/nosotros/Nosotros'
import Footer from './components/footer/Footer'
import seba from "../src/components/fotos/seba.jpg"
import delfina from "../src/components/fotos/delfina.jpg"
import rodolfo from "../src/components/fotos/rodolfo.jpg"

import ojo from "../src/components/fotos/ojo.jpg"
import medicina_carta from "../src/components/fotos/medicina_carta.jpg"
import celulas_madre from "../src/components/fotos/celulas_madre.jpg"
import crema from "../src/components/fotos/crema.jpg"
import spray from "../src/components/fotos/spray.jpg"
import Wsp from './components/wsp/Wsp'





const App = () => {
  return (
    <div>
      <Wsp/>
      <Navbar/>
      <Main/>
      <Technology 
        titulo={"Equipo"}
          lista={[
            { nombre: "Gallardo, María Delfina", titulo:"CEO & CSO", descripcion: "BSc. Biotechnologist and Molecular Biologist", foto: delfina },
            { nombre: " Goya, Rodolfo Gustavo ", titulo:"SCIENTIFIC ADVISOR", descripcion: "PhD in Biochemistry, Head of Rejuvenation and Anti-aging group, School of Medicine, National University of La Plata.", foto: rodolfo },
            { nombre: "Sebastián Cippitelli", titulo:"PARTNER IN SCIENCE AND DEVELOPMENT", descripcion: "Sebastián Cippitelli, Director de 1mPossible, es un visionario dedicado a superar límites en ciencia y biomedicina, con la audaz misión de vencer la mortalidad.", foto: seba },

          ]} 
      />
      <Nosotros id={"valores"}/>
      <Technology 
        id_tec={"Tecnologia"}
        titulo={"Tecnologías y Servicios"}
          lista={[
            { nombre: "Cremas y geles", descripcion: "Cremas y geles tópicos con células madre para regenerar y rejuvenecer la piel.", foto: crema },
            { nombre: "Tecnología de ácidos nucleicos ", descripcion: "Gotas oftálmicas que combina nanopartículas lipídas con tecnología de ácidos nucleicos para realizar terapia génica regenerativa oftalmológica.", foto: ojo },
            { nombre: "Medicina a la carta", descripcion: "Plataforma de screening de epigenoma y genoma del paciente y brindado de terapias personalizadas para tratamiento de síntomas del envejecimiento.", foto: medicina_carta },
            { nombre: "Medicina regenerativa", descripcion: "Terapias intravenosas de administración de células madre.", foto: celulas_madre },
            { nombre: "Spray intranasal", descripcion: "Spray intranasal que combina nanopartículas lipídas con tecnología de ácidos nucleicos para realizar terapia intracerebral antineurodegenerativa.", foto: spray },
          ]} 
      />
      <Footer/>
    </div>
  )
}

export default App
