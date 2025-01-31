import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <header>
                <div className="header-content">
                    <img src="./LOGO ASOCIACIÓN CAMBIO COLORES_Mesa de trabajo 1 copia-05.png" alt="Logo Asociación" />
                    <h1 className="titulo">AM3C "Creciendo Juntas"</h1>
                    <div className="button">
                        <Link to="/HazteSocia">HAZTE SOCIA!!!</Link>
                    </div>
                </div>
                <nav>
                    <ul>
                        <Link to="/">Index</Link>
                        <Link to="/QuienesSomos">QuienesSomos</Link>
                        <Link to="/equipo">Equipos</Link>
                        <Link to="/NuestraHistoria">NuestraHistoria</Link>
                        <Link to="/calendario">Calendario</Link>
                        <Link to="/servicio">Servicios</Link>
                        <Link to="/Evento">Evento</Link>
                        <Link to="/contacto">Contacto</Link>
                    </ul>


                </nav>
            </header>
        </div>
    )
}

export default Header;
