import { Link } from 'react-router-dom';
import './equipo.css';
import {Helmet} from 'react-helmet';


const Equipo = () => {
    return (
        <div className='equipo'>
            <Helmet>
            <meta name="description" content="Únete a la Asociación de Mujeres de Tres Cantos. Un espacio de crecimiento personal, apoyo mutuo y transformación social, 
            abierto a todos los que deseen contribuir a un mundo más inclusivo y equitativo."></meta>
            <meta name="keywords" content="asociacion de mujeres de tres cantos am3c  asociacion de mujeres mujeres en la sociedad"></meta>
            <title>Equipo</title>
            </Helmet>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <div className='grid'>
                <h1>Nuestro equipo:</h1>
                <h2>Un compromiso colectivo</h2>
                <div className='junta'>
                <p>La junta directiva de nuestra <b>asociación de Mujeres de Tres Cantos,</b> se elige cada
                    dos años, siguiendo la normativa vigente, y con el objetivo de asegurar la rotación de
                    roles y fomentar una participación activa y equitativa entre todas nuestras socias. Este
                    enfoque promueve un ambiente de trabajo basado en la solidaridad y el apoyo
                    mutuo.En <b>AM3C,</b> cada voz tiene el mismo valor, porque creemos que la verdadera fuerza
                    radica en la unión y en el crecimiento colectivo. TODAS somos parte fundamental de
                    este proyecto.</p>
                </div>
                 <h2>El corazón y la visión de nuestro camino</h2>
                <div className='grid grid50'>
                <img src="./laura.png" alt="" />
                <p>Laura Muñiz, actual presidenta y fundadora, es el corazón de esta asociación de
                Mujeres. Economista de profesión y “alma guerrera” de vocación, ha dedicado su vida
                a impulsar el papel de la mujer en la sociedad, desde la política hasta el compromiso
                social.Tras su jubilación, logró materializar el sueño que había llevado consigo durante años:
                crear un espacio donde las mujeres pudieran crecer y unirse para transformar su
                entorno.Con una visión clara, constituyó la Asociación de Mujeres de Tres Cantos para
                fomentar la solidaridad, la ayuda altruista y generosa, y la hermandad entre todas.</p>
                </div>
                <h2><Link className='equipo' to="/contacto">¿Quieres ser parte de nuestra asociación? ¡Contáctanos!</Link></h2>
            </div>
        </div>
    )
}

export default Equipo;