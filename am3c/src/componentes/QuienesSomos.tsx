import { Link } from 'react-router-dom';
import './QuienesSomos.css';
import { Helmet } from 'react-helmet';


const QuienesSomos = () => {
    return (

        <div className='quienesSomos'>
            <Helmet>
                <meta name="description" content="Únete a la Asociación de Mujeres de Tres Cantos. Un espacio de crecimiento personal, apoyo mutuo y transformación social, abierto a
                todos los que deseen contribuir a un mundo más inclusivo y equitativo."></meta>
                <meta name="keywords" content="asociacion de mujeres de tres Cantos, transformacion social, creciendo juntas, mujeres de tres cantos empoderamiento"></meta>
                <title>Asociación de Mujeres en Tres Cantos | Crecimiento Personal y Solidaridad</title>
            </Helmet>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <h1>QUIENES SOMOS</h1>
            <h2>Un Lugar para Crecer, Compartir y Transformar.</h2>
            <div className='grid grid50'>
                <img src="./foto am3c.jpg" alt="" />
                <p>Somos una <b>asociación de mujeres</b> en <b>Tres Cantos</b> con un propósito claro: crear un
                    espacio de crecimiento personal, apoyo mutuo y <b>transformación</b> social. Aquí
                    compartimos, aprendemos y, sobre todo, nos acompañamos.
                    Desde nuestros inicios en reuniones íntimas hasta el reconocimiento actual, hemos
                    evolucionado gracias al compromiso y los sueños de todas aquellas que, como
                    nuestra fundadora, creen que el cambio comienza en lo colectivo y en lo cercano.
                    Guiadas por los valores de fraternidad y solidaridad, nuestra <b>asociación de mujeres</b>
                    está abierta a todas las personas, <b>mujeres</b> y hombres, que deseen construir un
                    mundo más inclusivo y equitativo. Las mujeres lideramos, organizamos y
                    proponemos las actividades, pero todos aquellos que quieran compartir experiencias
                    y contribuir al crecimiento de esta comunidad son bienvenidos. Creemos en la
                    colaboración y en el poder de construir juntos.
                    Convencidas de que cada pequeña acción cuenta, seguimos avanzando, <b>“creciendo
                        juntas”</b> y creando un espacio de apoyo y <b>empoderamiento</b> para todas y todos</p>
            </div>
            <h2><Link className='quienessomosLink' to="/NuestraHistoria">Descubre nuestra historia</Link></h2>

        </div>
    )

}
export default QuienesSomos;