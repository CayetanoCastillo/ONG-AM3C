import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <img src="./LOGO ASOCIACIÓN CAMBIO COLORES_Mesa de trabajo 1 copia-05.png" alt="Logo Asociación" />
                    <h1 className="titulo">AM3C "Creciendo Juntas"</h1>
                    <div className="button">
                        <a href="./HazteSocia.tsx">¡HAZTE SOCIA!</a>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li className="dropdown">
                            <a href="#">Quiénes Somos</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Equipos</a></li>
                                <li><a href="#">Nuestra Historia</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Calendario</a></li>
                        <li className="dropdown">
                            <a href="#">Servicios</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Eventos</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
