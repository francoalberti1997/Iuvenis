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
import dani from "../src/components/team/dani.jpg"

import logo_blanco from "../src/components/inicio/logo_nuevo.jpg"
import logo_verde from "../src/components/inicio/logo_nuevo_fondo_verde.jpg"

import ubicacion from "../src/components/mision/ubicacion.jpg"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Team from "./components/team/Team";
import Colaboradores from "./components/Colaboradores/Colaboradores";
import Mision from "./components/mision/Mision";
import Footer from "./components/footer/Footer";



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
            "1mPossible innova en criogenia, abordando desafíos para la preservación corporal. No solo proveemos servicios, sino que somos aliados comprometidos en hallar soluciones, mejorando la tecnología criogénica y explorando avances en antiaging. Nos comprometemos a persistir en la búsqueda de respuestas.",
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
          title: "Anti Aging",
          texto_p:
            "1mPossible y su innovador Departamento de Anti-aging se dedica a ralentizar los signos del envejecimiento a través de la implementación de hábitos saludables, suplementos de última generación, cremas rejuvenecedoras y tratamientos especializados.",
          imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
        },
        {
          title: "Life extension",
          texto_p:
            "1mPossible garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.",
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
          },
          {
            "usuario": dani,
            "rol": "Colaborador",
            "nombre": "Daniel Lavagna",
            "profesion": "Diseñador Gráfico",
            "texto": "Daniel Lavagna es un talentoso Diseñador Gráfico, fotógrafo y editor de videos. Además, docente en un centro de formación profesional."
          }
          
        ]}
      />
    {/* <Mision/> */}
    <Servicios
      componentes={[
        {
          link_a:"Mision",
          title: "Misión",
          id_css: "mision",
          texto_p:
            "Transforma el Presente. Garantiza el Futuro. En 1mPossible, nuestra misión es ofrecer a cada ser humano TIEMPO, una segunda oportunidad de disfrutar plenamente de la vida y celebrar los logros alcanzados en la misma. Cada persona debe ser capaz de decidir hasta cuando quiere vivir, y no ser esclava de su deterioro biológico. ",
          imagen:
            logo_blanco,
          link:"mision"
        },
      ]}
    />
    <Servicios
      section={""}
      componentes={[
        {
          title: "Ubicación estratégica",
          id_css: "mision",
          texto_p:
            "En 1mPossible, la seguridad es más que un lema; es el pilar fundamental que respalda cada aspecto de nuestro proyecto. . Iniciamos nuestras investigaciones en Buenos Aires, Argentina, y estamos orgullosos de anunciar la apertura planificada para enero del 2026 de nuestro centro operativo de criogenia en Zug, con oficinas centrales en Zúrich, Suiza",
          imagen:
          ubicacion,
          link:"ubicacion"
        },
      ]}
    />

    <Footer/>
  </>
);

const Criogenia = () => (
  <>
    <Navbar />
    <Wsp />

    <Servicios
      title_special="Criogenia"
      render="si"
      componentes={[
        {
          title: "Seguridad",
          section: "Servicios",
          texto_p:
          "Los tubos de criogenia, parte esencial de nuestro proceso, no dependen de suministro eléctrico para su mantenimiento, asegurando su protección y su integridad física en todo momento. En 1mPossible, su seguridad es nuestra máxima prioridad. No solo preservamos su integridad, sino que garantizamos la continuidad de los tratamientos ante cualquier eventualidad, ya sea una ruptura del sistema o una catástrofe natural. En cada paso que damos, en cada decisión que tomamos, su seguridad y bienestar son consideraciones centrales. Con 1mPossible, su futuro está resguardado en un entorno que prioriza la seguridad y la continuidad de la vida."
          ,
          imagen:
            "https://www.thoughtco.com/thmb/gpXe4f-4MQeNFrH4CMuWPya2aTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-storage-for-ivf-478187231-59491b7c3df78c537bc0b778.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },
        {
          title: "Usted no esta muerto cuando su corazón deja de latir y deja de respirar",
          section: "Servicios",
          texto_p:
          `La muerte está actualmente asociada con la pérdida de las funciones cerebrales. En cambio debería definirse como la pérdida irreversible de la vida de manera absoluta y definitiva, cuando la estructura cerebral está destruida. 
          En el ámbito de la medicina, la muerte se asocia comúnmente con la pérdida irreversible de las funciones cerebrales. Sin embargo, la criónica propone una perspectiva innovadora al considerar la "muerte clínica" como una pausa metabólica, no un punto sin retorno. Este enfoque, respaldado por tecnologías emergentes como la nanotecnología, ofrece la posibilidad de reanimación.
          Los científicos en criónica se ven obligados por regulaciones legales a esperar la declaración de muerte clínica, lo que prolonga el inicio del procedimiento. Es crucial entender que la criónica busca preservar vidas, no revivir a quienes ya han fallecido. Esta espera legal tiene un impacto mínimo en la preservación efectiva de la vida del paciente.
          La criónica plantea la posibilidad teórica de preservar un cuerpo humano a temperaturas extremadamente bajas, con el potencial de ser revivido en el futuro. Aunque aún no se ha realizado con éxito en humanos, se explora el método de vitrificación para mantener la estructura neuronal, base de la mente humana, intacta.
          El daño al detener el flujo sanguíneo durante 6 minutos o más, principalmente afecta a los vasos sanguíneos y no a las neuronas. La criónica aborda este desafío, sugiriendo que iniciar los procedimientos lo más temprano posible, idealmente dentro del primer minuto de la muerte clínica, es óptimo. Sin embargo, el método sigue siendo viable incluso si se inicia más tarde debido a restricciones legales.
           `,
          imagen:
            "https://image.pbs.org/video-assets/KAID/science-trek/158279/images/mezzanine_801.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Método técnico estándar",
          section: "Servicios",
          texto_p:
          `
          Después de la muerte legal, el paciente se sumerge en un baño de agua helada para acelerar el enfriamiento. 
          Se aplica soporte cardiopulmonar mecánico para facilitar este proceso. La circulación rápida de agua enfría el cuerpo de 37°C a 10°C. 
          Luego, se reemplaza la sangre y gran parte del agua por un crioprotector para prevenir la formación de hielo. Finalmente, el cuerpo se enfría a -120°C y luego a -196°C con nitrógeno líquido para su almacenamiento.
La crioprotección, mediante compuestos como el glicerol, reduce o elimina la formación de hielo, evitando daños estructurales. Se evita la cristalización intracelular o extracelular, reduciendo el daño celular. La vitrificación, en comparación con la congelación, detiene el tiempo biológico sin causar daño estructural.

          `,
          imagen:
          `https://media.licdn.com/dms/image/C4D1BAQHg6yM2QSvcyg/company-background_10000/0/1601919496557/reaction_biology_corporation_cover?e=2147483647&v=beta&t=7aPYMzEN7litvRUVsGUN2t-XSG57cdg6awboD5oFBcU`,
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },


        {
          title: "La muerte clínica no es muerte en absoluto",
          section: "Servicios",
          texto_p:
          `
          Contrario a la creencia común, nuestra investigación revela que los 6 minutos después del paro cardíaco no son determinantes para el daño neurológico. Es cierto que la apoptosis de la estructura cerebral inicia en este momento, pero lleva muchas horas en completarse el proceso, preservando en gran medida las células cerebrales. La posibilidad de daño isquémico puede mitigarse con trasplante de células madre, que aumenta la tolerancia a la isquemia.
Lo ideal es comenzar los procedimientos dentro de dos minutos de la declaración de la muerte clínica y no exceder los 15 minutos. El enfriamiento del cuerpo, crucial para evitar daño isquémico. 
La reducción de temperatura causa hipotermia, deprimiendo la actividad proteasa y protegiendo la barrera hematoencefálica. Esto es esencial para evitar la exposición del parénquima cerebral al flujo sanguíneo y su consecuente deterioro.

          `,
          imagen:
          "https://wallpapers.com/images/hd/beautiful-sunshine-ll7at0ykw22hm07f.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "La reanimación fue posible usando temperaturas mayores en animales",
          section: "Servicios",
          texto_p:
          `
          Experimentos con ratas, gatos y perros han demostrado tasas de reanimación exitosas utilizando técnicas de enfriamiento y sustitutos sanguíneos. Incluso se ha logrado reanimar ratas varias veces, indicando la viabilidad del proceso. Experimentos en perros han demostrado resistencia a la isquemia, y la aplicación de hipotermia ha mostrado resultados positivos sin deterioro neurológico significativo. En humanos, la parada cardíaca hipotérmica se ha realizado con éxito durante procedimientos quirúrgicos, respaldando la efectividad de enfoques similares. 


          `,
          imagen:
          "https://static01.nyt.com/images/2019/09/10/multimedia/10xp-animaltesting1/10xp-animaltesting1-videoSixteenByNineJumbo1600-v2.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Las mejoras en el ámbito legal",
          section: "Servicios",
          texto_p:
          `
          Después de la muerte legal, el paciente se sumerge en un baño de agua helada para acelerar el enfriamiento. 
          Se aplica soporte cardiopulmonar mecánico para facilitar este proceso. La circulación rápida de agua enfría el cuerpo de 37°C a 10°C. 
          Luego, se reemplaza la sangre y gran parte del agua por un crioprotector para prevenir la formación de hielo. Finalmente, el cuerpo se enfría a -120°C y luego a -196°C con nitrógeno líquido para su almacenamiento.
La crioprotección, mediante compuestos como el glicerol, reduce o elimina la formación de hielo, evitando daños estructurales. Se evita la cristalización intracelular o extracelular, reduciendo el daño celular. La vitrificación, en comparación con la congelación, detiene el tiempo biológico sin causar daño estructural.

          `,
          imagen:
          "https://www.centromedicounidoc.com/wp-content/uploads/2023/02/Medicina-Legal-y-Forense-en-Marbella-Centro-Medico-Unidoc.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Nuestra propuesta técnica es superior a la existente",
          section: "Servicios",
          texto_p:
          `
          Nuestras investigaciones marcan un camino a seguir en cuanto a la preservación del paciente en las mejores condiciones posibles. Nuestra propuesta técnica es superior, anticipando resultados mejorados en la criopreservación. Con esta estrategia, buscamos optimizar la eficacia del proceso y prolongar la preservación de manera más efectiva.


          `,
          imagen:
          "https://i0.wp.com/esrobross.com.ec/wp-content/uploads/2015/07/Business-HD-Wallpaper-1.jpg?ssl=1",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
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
          texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
                "1mPossible te invita a adentrarte en nuestra revolucionaria área de investigación, donde desafiamos los límites del envejecimiento. Nuestra dedicación se centra en revertir los marcadores del paso del tiempo, tales como sarcopenia, inflamación crónica, estrés oxidativo, longitud de los telómeros, y mucho más. Estamos comprometidos a ofrecerte una experiencia de rejuvenecimiento incomparable. <br> <b> En etapa de investigación</b>",
              }}
            />
          ),
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
          texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
                "1mPossible garantiza la preservación de su cuerpo en criogenia, asegurando su optimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación. Con nosotros, tienes la garantía de vida, ahora y en el futuro. ¿Estás listo para transformar tu existencia? <br> <b> En etapa de investigación</b>",
              }}
            />
          ),
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
          texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "1mPossible presenta un innovador Departamento de Anti-aging, que se dedica a ralentizar los signos del envejecimiento a través de la implementación de hábitos saludables, suplementos de última generación, cremas rejuvenecedoras y tratamientos especializados. Sumado a esto, contamos con una exclusiva rama dedicada al estilo de vida y alimentación saludable, orientada hacia la prevención y el bienestar integral. <br> <b> En etapa de investigación</b>",
              }}
            />
          ),
          imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
          id_css: "texto_p",
        }]}/>

  </>
);

const ColaboradorPage = (props) => (
  <>
    <Navbar />
    <Wsp />
    <Colaboradores
      nombre={props.nombre}
      titulo={props.titulo}
      imagen={props.imagen}
      texto={props.texto}
      link={props.link}
    />
        <Footer/>

  </>
);



function App() {

  const place_mission= [
    {
      title: "Misión",
      subtitulo: "Transformando el Presente, Garantizando el Futuro ",
      link: "mision",
      texto_p:`
      En 1mPossible, nuestra misión es ofrecer a cada ser humano TIEMPO, una segunda oportunidad de disfrutar plenamente de la vida y celebrar los logros alcanzados en la misma. Cada persona debe ser capaz de decidir hasta cuando quiere vivir, y no ser esclava de su deterioro biológico. 
      Los marcadores biológicos del envejecimiento representan una patologia, estética o funcional la cual podremos curar. Nos impulsa una visión constructiva y altruista, orientada a elevar a la humanidad a un nivel evolutivo sin precedentes: la inmortalidad. 
      Este anhelo, perseguido durante milenios, se convierte en una realidad tangible con 1mPossible. Nuestro equipo de científicos altamente capacitados y profesionales está comprometido a lograr el éxito donde otros han fallado. Los mejores en cada area, con un espíritu desafiante, confiamos en nuestra capacidad para alcanzar esta meta revolucionaria, y estamos dispuestos a asumir riesgos significativos para hacerlo. 
      En 1mPossible, no solo creamos una visión, sino que la convertimos en una realidad tangible, marcando un hito en la historia al ofrecer a la humanidad la promesa de un futuro más allá de los límites de la mortalidad.
      
      `,
      imagen:
      logo_verde,
    },
{
      title: "Ubicación estratégica",
      link: "ubicacion",
      subtitulo:"Total seguridad, nuestro compromiso",
      texto_p:
      `En 1mPossible, la seguridad es más que un lema; es el pilar fundamental que respalda cada aspecto de nuestro proyecto. Iniciamos nuestras investigaciones en Buenos Aires, Argentina, y estamos orgullosos de anunciar la apertura planificada para enero del 2026 de nuestro centro operativo de criogenia en Zug, con oficinas centrales en Zúrich, Suiza. La elección de esta ubicación no es casual; es estratégica y respaldada por un compromiso inquebrantable con la seguridad integral. Aunque aspiramos a prolongar la vida indefinidamente, reconocemos que no hay tratamiento que pueda prevenir catástrofes naturales. Es por ello que hemos seleccionado Suiza como nuestro país principal de expansión en operaciones de criogenia.`,
      imagen: ubicacion,
    }
  ]

  const colaboradorData = [
    {
      usuario: daniela,
      rol: 'Científico',
      nombre: 'Daniela López De Luise',
      profesion: 'Doctora en Ciencias Informáticas',
      link:{link_1:'https://r9.ieee.org/argentina-cis/inicio/autoridades/daniela-lopez-de-luise/ '},
      texto: `
      La docente, investigadora y directora del Artificial Intelligence Group (AIGroup) de la Facultad de Ingeniería de la Universidad de Palermo (UP), Daniela López De Luise, fue designada en el 2013 presidente de Institute of Electrical and Electronics Engineers (IEEE Argentina), por votación casi unánime e histórica por la cantidad de votantes. 
 
Esta asociación profesional es la más grande del mundo y está dedicada al avance tecnológico y la innovación. Cuenta con más de 400 mil miembros en más de 160 países.
 
El nombramiento con el que ha sido distinguida la Dra. López De Luise, quien hace 28 años es miembro del IEEE, es un altísimo honor que muy pocos en la Argentina han recibido, debido a las altas exigencias del Instituto respecto a los candidatos. 

Daniela es Doctora en Ciencias Informáticas por la Universidad Nacional de La Plata, y es Ingeniera en Informática, entre sus otros títulos. Es actualmente la directora del laboratorio de investigaciones «Computational Intelligence And Information Systems Labs (CIIS LAB), asociación sin fines de lucro, dedicada al apalancamiento de la inteligencia artificial como investigación aplicada. Revista actualmente como Directora de la Especialización de Ensenanza de Ciencias de la Computación, UADER (Entre Ríos), y es profesora de Posgrado en tres instituciones: en la Universidad Austral, en la disciplina de aprendizaje automático, en la Universidad Abierta Interamericana UAI y en la Universidad Señor del Sipán (Perú). Presenta una extensa trayectoria como oradora en diversos eventos nacionales e internacionales, y ha publicado un centenar de trabajos relacionados con la disciplina de IA, creando conceptos como los wavelets morfosintácticos, aportando al estudio de la conciencia de robots y proponiendo nuevos mecanismos de propagación en el campo de los autómatas, como el caso del modelo de conciencia bacteriana. Es miembro del programa local de disertantes distinguidos de la IEEE Argentina. Fue Presidente del comité directivo de la IEEE Argentina en el período 2013-2014. Fundó y dirigió el laboratorio de investigaciones AI Group en la Universidad de Palermo. Es fundadora del Capítulo Argentino de la IEEE Computational Intelligence Society, y fue su primera Presidente (2005). También ha creado la red científica PI Network en 2008, dirigiendo la misma hasta 2013.  En su paso por el ITBA creó y dirigió el primer laboratorio de Bases de datos del ITBA, Instituto Tecnológico de Buenos Aires, hacia 1998, entre otras actividades. En la actualidad, divide su tiempo entre su rol de investigadora, su rol en la IEEE Capitulo Argentina, y sus múltiples proyectos de investigación, desarrollo e innovación en torno a la inteligencia computacional. El último de ellos (2019) es versante sobre una novel arquitectura de islas de investigación, desarrollo e innovación, a radicarse en el Museo Histórico Sarmiento, en sociedad con la SCA (Sociedad Científica Argentina), con miras a lograr un lugar colaborativo para investigadores, empresas, organizaciones intermedias y docentes que deseen colaborar en la problemática de la enseñanza STEAM (ciencia, tecnología, ingeniería, arte y matemáticas).
`,
    },
    {
      usuario: felipe,
      rol: 'Científico',
      nombre: 'Felipe Bruno Dias de Oliveira',
      profesion: 'Doctor en Ciencias de la Salud',
      texto: `
      
Felipe Bruno Dias de Oliveira es Doctor en Ciencias de la Salud (Envejecimiento) (2020), con distinción honorífica, egresado de la Facultad Israelita de Ciencias de la Salud Albert Einstein - Instituto Israelita de Enseñanza e Investigación Albert Einstein y reconocido como "Estudiante Destacado" por la Universidad de Oxford - Instituto Kennedy de Reumatología (2019-2020). Inició su formación académica con una Maestría en Desarrollo Humano y Tecnologías (Tecnologías y Rendimiento Humano) (2013) y obtuvo su Licenciatura en Educación Física (2010) en la Universidad Estatal Paulista Júlio de Mesquita Filho - Instituto de Biociencias.

Actualmente, esta dedicado al estudio de la medicina en la Universidad de Buenos Aires - Facultad de Medicina. Sus intereses académicos incluyen la mecanobiología, cartílago articular, fisiopatología de la osteoartritis, terapia celular y tratamiento conservador con ejercicio físico.

Su trayectoria académica y sus contribuciones en el campo de la salud, especialmente en el área de envejecimiento, respaldan su compromiso con la investigación y la excelencia académica.

      `,
    },
    {
      usuario: samanta,
      rol: 'Científico',
      nombre: 'Samanta Adriana Reyes Molina',
      profesion: 'Doctora en Ciencias Edafología',
      texto: `
      La Doctora Samanta Reyes Molina es una apasionada investigadora que ha dedicado su vida a explorar los secretos de la biología. 
En el año 2000 se sumergió en el fascinante mundo de la Biología, graduándose con honores en el año 2006. Este fue solo el comienzo de su viaje. Después de nutrir su curiosidad en la licenciatura, Samanta decidió llevar su conocimiento al siguiente nivel. Se aventuró en el Colegio de Postgraduados Campus Montecillo, donde se convirtió en Maestra en Ciencias Botánica entre 2008 y 2011..
En 2016 obtiene su Doctorado en Ciencias Edafología en el mismo Colegio de Postgraduados. Con dedicación y pasión, exploró los misterios del suelo y desentrañó los secretos que este guardaba.
Samanta se convirtió en una valiosa colaboradora en proyectos de ecología, explorando los poblados de cactáceas en el Valle de Cuatro Ciénegas, Coahuila. También se destacó como asistente de investigación, enseñando fisiología vegetal y contribuyendo a proyectos de investigación que buscaban mejorar la calidad de vida de las plantas.
Actualmente Samanta está inmersa en una Maestría en Nutrición Deportiva en el Instituto de Estudios Superiores de Ingeniería Educativa.
Sus intereses científicos son tan vastos como su sed de conocimiento. Desde gestión de proyectos sustentables hasta auditorías ambientales, pasando por cultivos in vitro y clasificación taxonómica de plantas, Samanta es una exploradora incansable del mundo científico. Actualmente con intereses de investigación en el area de criogenia, envejecimiento y antia-ging.
Posee habilidades excepcionales. Es organizada, profesional, motivada y aprende con rapidez. Su compromiso con el avance científico se refleja en su participación activa en congresos y su constante búsqueda de cursos y certificaciones.
Samanta Reyes posee conocimiento, pasión y un compromiso inquebrantable con el progreso científico.

      `,
    },
    {
      usuario: seba,
      rol: 'CEO',
      nombre: 'Sebastián Cippitelli',
      profesion: 'Director General de 1mPossible',
      texto: `
      Sebastián Cippitelli, el visionario Director General de 1mPossible, cuyo viaje ha estado marcado por la creación de ideas revolucionarias para impulsar el avance científico.

      Sebastián, un políglota consumado, ha dedicado la última década a forjar ideas disruptivas que desafían los límites de la ciencia. Su travesía formal en el ámbito de la investigación y el estudio en biología y medicina ha abarcado los últimos tres años, donde ha demostrado un compromiso inquebrantable con la exploración de nuevos horizontes en estas disciplinas.
      
      Con una convicción inquebrantable, Sebastián sostiene que el éxito en cada área de desarrollo de 1mPossible se logra con el equipo adecuado de colaboradores y el respaldo financiero necesario. Su visión audaz va más allá de los límites convencionales, desafiando la percepción actual de la mortalidad.
      
      El plantea que la mejora de los protocolos existentes podría llevar a la criopreservación exitosa de un cuerpo y a la optimización de los tratamientos de anti-envejecimiento. Además, busca implementar tratamientos de rejuvenecimiento aún inexistentes en la actualidad. Su visión culmina en una cruzada colosal: vencer a la muerte, no solo resistir ante ella.
      
      A través de sus ideas audaces y dedicación incansable, se erige como un pionero que desafía los límites del conocimiento en pos de un futuro donde la vida no sea simplemente esclava de la muerte. 
         
      `,
    },
    {
      usuario: franco,
      rol: 'Técnico',
      nombre: 'Franco Alberti',
      link: {link_1:'https://francoalberti1997.vercel.app/', link_2:'https://www.linkedin.com/in/franco-alberti-3248b7224/'},
      profesion: 'Digital Business Developer',
      texto: `
      Desarrollador Full Stack y Emprendedor especializado en negocios digitales con amplia experiencia en la creación de plataformas digitales y estrategias de marketing online.
      Founder de "Tu Educación Alternativa", una academia de inglés online. Ahora también, emprendiendo en la transformación digital de negocios con "Alberti Code". 
      `,
    },
    {
      usuario: dani,
      rol: 'Técnico',
      nombre: 'Daniel Lavagna',
      link: "",
      profesion: 'Diseñador Gráfico',
      texto: `
      Daniel Lavagna es un talentoso Diseñador Gráfico, fotógrafo y editor de videos. Su enfoque versátil le permite abordar diversos aspectos del diseño visual, desde la creación de identidades visuales hasta la producción de contenido multimedia atractivo. No solo es diseñador sino que también docente en un centro de formación profesional.
      `,
    }
    
    // You can add more objects with data here as needed
  ];


  return (
    <Router>
      <Routes>
        <Route path="*" element={<ServiciosPage />} />
        <Route path="/Criogenia" element={<Criogenia />} />
        <Route path="/Rejuvenating" element={<Rejuvenating />} />
        <Route path="/Life extension" element={<Lifeextension />} />
        <Route path="/Anti Aging" element={<Aging />} />
        
        {colaboradorData.map((i)=>(
          <Route path={`/Colaborador/${i.nombre}/`} element={<ColaboradorPage nombre={i.nombre} imagen={i.usuario} titulo={i.profesion} texto={i.texto} link={i.link}/>}/>    
        ))}

        {place_mission.map((i)=>(
          <Route path={`/${i.link}/`} element={<ColaboradorPage link={i.link} imagen={i.imagen} titulo={i.titulo} texto={i.texto_p} subtitulo={i.subtitulo}/>}/>    
        ))}
      </Routes>
    </Router>
  );
}

export default App;
