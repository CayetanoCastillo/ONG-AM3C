import { Link } from 'react-router-dom';
import './NuestraHistoria.css';
import {Helmet} from 'react-helmet';


const NuestraHistoria = () => {
    return (
        <div className='nuestra-historia'>
            <Helmet>
            <meta name="description" content="Conoce cómo nuestra fundadora, Laura Muñiz, hizo realidad el sueño de unir y empoderar a mujeres en Tres Cantos. Un espacio de
            crecimiento, hermandad y apoyo donde seguimos creciendo juntas."></meta>
            <meta name="keywords" content="mujeres, tres cantos, asociacion de mujeres de tres cantos, creciendo juntas"></meta>
            <title>Nuestra Historia: Asociación de Mujeres de Tres Cantos</title>
            </Helmet>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <h1>NUESTRA HISTORIA:</h1>
            <h2>De la visión de una mujer al crecimiento de una comunidad</h2>
            <div className='grid historia'>
                <div className='historiaP'>
                    <p>Nuestra historia es el reflejo de un sueño que Laura Muñiz, nuestra fundadora, guardó
                        por muchos años. Fue solo tras su jubilación que pudo darle vida y forma a este
                        anhelo: construir un espacio donde todas las <b>mujeres</b> se sintieran acompañadas,
                        valoradas y libres para crecer.
                        Comenzamos reuniéndonos en la sala de alcaldes del Ayuntamiento de <b>Tres Cantos</b>, y
                        más tarde, en el salón de Laura. En aquellos primeros encuentros, meditábamos,
                        charlábamos y compartíamos un té, creando un ambiente de cercanía y confianza.
                        Pero Laura siempre visualizó algo más trascendente, un proyecto con propósito, y en
                        2019 ese sueño se convirtió en la <b>asociación de Mujeres de Tres Cantos</b> que hoy
                        conocemos.
                        A pesar de los desafíos, como la pausa durante la pandemia, el compromiso de
                        nuestras <b>mujeres</b> nos mantuvo unidas. Al reactivarnos, encontramos apoyo en la
                        entonces concejala de Igualdad, quien nos ofreció un espacio y un aula para nuestras
                        actividades. Hoy, con más de 130 socias, seguimos <b>“creciendo juntas”</b>, convencidas
                        de que este espacio es un lugar de hermandad, donde cada acción, contribuye a un
                        cambio duradero en nuestra comunidad.
                    </p>
                </div>
                <div className='grid grid50'>
                    <img className='fotoizq' src="./foto am3c.jpg" alt="" />
                    <img src="./foto am3c.jpg" alt="" />
                </div>
            </div>
            <h2><Link className='nuestra-historia' to="/calendario">lo mejor está por venir, ¡descubrelo!</Link></h2>

        </div>
    )
}

export default NuestraHistoria;