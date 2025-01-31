import { Link } from 'react-router-dom';
import './servicio.css';

const Servicio = () => {
    return (
        <div className='servicio'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
                <h1>Nuestros Servicios</h1>
                <h2>Contribuyendo con el Bienestar de Nuestra Comunidad</h2>
            <div className=' grid servicio'>
                <p>En la <b>Asociación de Mujeres de Tres Cantos,</b>ofrecemos servicios con el fin de
                    aportar bienestar, apoyo y crecimiento a nuestra comunidad. Nuestras terapias y
                    asesorías incluyen:</p>
                <ul>
                    <li><b>Reiki y Shiatsu:</b>Terapias para el bienestar físico y emocional.</li>
                    <li><b>Atención Psicológica:</b>Espacio seguro para fortalecer la salud mental.</li>
                    <li><b>Abrazo Legal:</b>Apoyo y asesoría jurídica para enfrentar diversas situaciones.</li>
                </ul>
                <p>Estos servicios, llevados a cabo por profesionales de confianza, están disponibles
                    mediante cita previa y están abiertos a todas aquellas personas que necesiten de este
                    apoyo en su vida.</p>
                <div className='grid grid333'>
                    <img src="./foto am3c.jpg" alt="" />
                    <img src="./foto am3c.jpg" alt="" />
                    <img src="./foto am3c.jpg" alt="" />
                </div>
            </div>
                <h2><Link className='contacto' to="/contacto">Agenda tu sesion de apoyo</Link></h2>
        </div>

    )
}

export default Servicio;