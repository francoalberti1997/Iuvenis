import React from "react";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./components/inicio/Inicio";
import Servicios from "./components/Servicios/Servicios";
import Wsp from "./components/wsp/Wsp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
          title: "Aging",
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
          "garantiza la pgarantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías reservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
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
          "garantiza la pgarantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías reservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
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
            "garantiza la pgarantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías reservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
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
          title: "Aging",
          texto_p:
          "garantiza la pgarantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías reservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
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
        <Route path="/" element={<ServiciosPage />} />
        <Route path="/Criogenia/" element={<Criogenia />} />
        <Route path="/Rejuvenating/" element={<Rejuvenating />} />
        <Route path="/Lifeextension/" element={<Lifeextension />} />
        <Route path="/Aging/" element={<Aging />} />
      </Routes>
    </Router>
  );
}

export default App;
