import { Link } from 'react-router-dom';
import './evento.css';
import {Helmet} from 'react-helmet';


const Evento = () => {
    return (
        <div className='evento'>
            <Helmet>
            <meta name="description" content="hdshadhsad"></meta>
            <meta name="keywords" content="hdsahdhsad"></meta>
            <title>Eventos</title>
            </Helmet>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <div className='grid'>
                <h1>Eventos Especiales</h1>
                <h2>Encuentros que transforman</h2>
                <div className='eventoActividades'>
                    <p>Desde conferencias inspiradoras hasta <b>actividades comunitarias</b> y de
                        empoderamiento, para la <b>Asociación de Mujeres de Tres Cantos</b>, cada evento es una
                        oportunidad para profundizar en nuestros valores de fraternidad y <b>transformación
                            social</b>.
                    </p>
                </div>
                <div className='grid grid50'>
                    <img className="reseña" src="./reseña.png" alt="" />
                    <img src="./evento.jpeg" alt="" />
                </div>
            </div>
            <h2><Link className='evento1' to="/NuestraHistoria">Conoce más sobre nuestra historia</Link></h2>
        </div>
    )
}

    export default Evento;