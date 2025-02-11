
import Inicio from './componentes/inicio'
import './App.css'
import {Helmet} from 'react-helmet';

const index = () => {
  return(
    <>
    <Helmet>
            <meta name="description" content="Únete a la Asociación de Mujeres de Tres Cantos y sé parte de una comunidad de crecimiento, apoyo mutuo y transformación
            social. Juntas construimos un futuro más justo."></meta>
            <meta name="keywords" content="asociacion de mujeres de tres cantos, empoderamiento, crecimiento personal, mujeres"></meta>
            <title>Asociación de Mujeres de Tres Cantos | Empoderamiento y Crecimiento</title>
            </Helmet>
      <Inicio></Inicio>
    </>
  )
}


export default index
