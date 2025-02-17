import './Header.css';
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
                        <li><Link to="/">Index</Link></li>
                        <li className="dropdown">
                            <Link to="/QuienesSomos">Quiénes Somos</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/equipo">Equipos</Link></li>
                                <li><Link to="/NuestraHistoria">Nuestra Historia</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/calendario">Calendario</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/Evento">Eventos</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/servicio">Servicios</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/socias">listado de Socias</Link></li>
                        <li><Link to="/obtenercontactos">Listado de contactos</Link></li>
                    </ul>

                </nav>
            </header>
        </div>
    );
};

export default Header;
