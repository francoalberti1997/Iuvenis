import React from "react";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./components/inicio/Inicio";
import Servicios from "./components/Servicios/Servicios";
import Wsp from "./components/wsp/Wsp";
import franco from "../src/components/team/perfil_franco.jpg"

import daniela from "../src/components/team/Daniela.jpg"
import felipe from "../src/components/team/Felipe.jpg"
import samanta from "../src/components/team/Samanta.jpg"
import seba from "../src/components/team/Seba.jpg"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Team from "./components/team/Team";


const ServiciosPage = () => (
  <>
    <Navbar />
    <Wsp />
    <Inicio />
    <Servicios
      section={"Servicios"}
      componentes={[
        {
          title: "Criogenia",
          section: "Servicios",
          texto_p:
            "Innova en criogenia, abordando desafíos para la preservación corporal. No solo proveemos servicios, sino que somos aliados comprometidos en hallar soluciones, mejorando la tecnología criogénica y explorando avances en antiaging. Nos comprometemos a persistir en la búsqueda de respuestas.",
          imagen:
            "https://www.thoughtco.com/thmb/gpXe4f-4MQeNFrH4CMuWPya2aTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-storage-for-ivf-478187231-59491b7c3df78c537bc0b778.jpg",
        },
      ]}
    />
    <Servicios
      section={"Investigación"}
      componentes={[
        {
          title: "Rejuvenating",
          texto_p:
            "desafía los límites del envejecimiento. Nuestra dedicación se centra en revertir los marcadores del paso del tiempo, tales como sarcopenia, inflamación crónica, estrés oxidativo, longitud de los telómeros, y mucho más.",
          imagen:
            "https://wacenter.org/wp-content/uploads/2023/03/anti-aging.jpg",
        },
        {
          title: "Anti-Aging",
          texto_p:
            "y su innovador Departamento de Anti-aging se dedica a ralentizar los signos del envejecimiento a través de la implementación de hábitos saludables, suplementos de última generación, cremas rejuvenecedoras y tratamientos especializados.",
          imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
        },
        {
          title: "Lifeextension",
          texto_p:
            "garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
          imagen:
            "https://wallpaperaccess.com/full/2351892.jpg",
        },
      ]}
    />
    <Team
          staff={"CEO"}
          rol={"General"}
          icons={"fa-solid fa-user-tie"}
        componentes={[
          {
            usuario: seba,
            rol: "CEO",
            nombre: "Sebastián Cippitelli",
            profesion: "Director General de 1mPossible",
            texto: "Sebastián Cippitelli, Director de 1mPossible, es un visionario dedicado a superar límites en ciencia y biomedicina, con la audaz misión de vencer la mortalidad."
          },
          // Puedes agregar más objetos con datos aquí según sea necesario
        ]}
      />
      <Team
        staff={"Nuestros Científicos"}
        icons={"fa-solid fa-graduation-cap"}

        componentes={[
          {
            "usuario": daniela,
            "rol": "Científico",
            "nombre": "Daniela López De Luise",
            "profesion": "Doctora en Ciencias Informáticas",
            "texto": "Doctora en Ciencias Informáticas, lidera el CIIS LAB en inteligencia artificial. Su proyecto actual en el Museo Histórico Sarmiento busca fomentar la enseñanza STEAM."
          },
          {
            "usuario": felipe,
            "rol": "Científico",
            "nombre": "Felipe Bruno Dias de Oliveira",
            "profesion": "Doctor en Ciencias de la Salud",
            "texto": "Doctor en Ciencias de la Salud, formado en Albert Einstein y reconocido por Oxford, investiga en la Universidad de Buenos Aires, destacándose en mecanobiología."
          },
          {
            "usuario": samanta,
            "rol": "Científico",
            "nombre": "Samanta Adriana Reyes Molina",
            "profesion": "Doctora en Ciencias Edafología",
            "texto": "Doctora en Ciencias Edafología y Licenciada en Biología, especializada en ecología y fisiología vegetal. Líder ambiental comprometida con proyectos sostenibles."
        },          // Puedes agregar más objetos con datos aquí según sea necesario
        ]}
      />

<Team
        staff={"Nuestros Técnicos"}
        icons={"fa-solid fa-wrench"}
        componentes={[
          {
            "usuario": franco,
            "rol": "Colaborador",
            "nombre": "Franco Alberti",
            "profesion": "Digital Business Developer",
            "texto": "Desarrollador Full Stack y Emprendedor especializado en negocios digitales con amplia experiencia en la creación de plataformas digitales y estrategias de marketing online."
          }       // Puedes agregar más objetos con datos aquí según sea necesario
        ]}
      />

  </>
);

const Criogenia = () => (
  <>
    <Navbar />
    <Wsp />

    <Servicios
      componentes={[
        {
          title: "Criogenia",
          section: "Servicios",
          texto_p:
          "presenta una vanguardista línea de investigación que aborda de manera integral todos los desafíos inherentes a las técnicas actuales. Nuestro enfoque se centra en ofrecer una solución definitiva mientras garantizamos la preservación óptima del cuerpo y sus estructuras mediante nuestro avanzado sistema de criogenia. En 1mpossible, no solo somos proveedores de servicios criogénicos, sino el aliado comprometido que persistirá hasta encontrar una resolución satisfactoria para sus necesidades. Nuestra labor constante de investigación se extiende a la mejora continua tanto de la tecnología criogénica como de los avances en antiaging y rejuvenecimiento. Consideramos la criogenia no como un fin en sí misma, sino como una poderosa herramienta, un medio para alcanzar resultados concretos. En el caso de que no sea posible revertir la situación del cliente en el presente, ofrecemos una etapa transitoria donde su cuerpo será preservado temporalmente hasta hallar la solución definitiva. En 1mpossible, estamos comprometidos con llevarlo a un puerto seguro, demostrando que más allá de ser competidores, somos el guerrero definitivo que persistirá incansablemente en la búsqueda de respuestas para sus necesidades.",
          imagen:
            "https://www.thoughtco.com/thmb/gpXe4f-4MQeNFrH4CMuWPya2aTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-storage-for-ivf-478187231-59491b7c3df78c537bc0b778.jpg",
          id_css: "texto_p",

        },
      ]}/>
  </>
);

const Rejuvenating = () => (
  <>
    <Navbar />
    <Wsp />

    <Servicios
       componentes={[
        {
          title: "Rejuvenating",
          texto_p:
          "te invita a adentrarte en nuestra revolucionaria área de investigación, donde desafiamos los límites del envejecimiento. Nuestra dedicación se centra en revertir los marcadores del paso del tiempo, tales como sarcopenia, inflamación crónica, estrés oxidativo, longitud de los telómeros, y mucho más. Estamos comprometidos a ofrecerte una experiencia de rejuvenecimiento incomparable.",
          imagen:
            "https://wacenter.org/wp-content/uploads/2023/03/anti-aging.jpg",
          id_css: "texto_p",

        }]}/>
  </>
);

const Lifeextension = () => (
  <>
    <Navbar />
    <Wsp />

    <Servicios
       componentes={[
        {
          title: "Lifeextension",
          texto_p:
          "garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación. Con nosotros, tienes la garantía de vida, ahora y en el futuro. ¿Estás listo para transformar tu existencia?",
          imagen:
            "https://wallpaperaccess.com/full/2351892.jpg",
          id_css: "texto_p",

        }]}/>
  </>
);

const Aging = () => (
  <>
    <Navbar />
    <Wsp />

    <Servicios
       componentes={[
        {
          title: "Anti-Aging",
          texto_p:
          "presenta un innovador Departamento de Anti-aging, que se dedica a ralentizar los signos del envejecimiento a través de la implementación de hábitos saludables, suplementos de última generación, cremas rejuvenecedoras y tratamientos especializados. Sumado a esto, contamos con una exclusiva rama dedicada al estilo de vida y alimentación saludable, orientada hacia la prevención y el bienestar integral.",
          imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
          id_css: "texto_p",
        }]}/>
  </>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ServiciosPage />} />
        <Route path="/Criogenia" element={<Criogenia />} />
        <Route path="/Rejuvenating" element={<Rejuvenating />} />
        <Route path="/Lifeextension" element={<Lifeextension />} />
        <Route path="/Anti-Aging" element={<Aging />} />
      </Routes>
    </Router>
  );
}

export default App;
