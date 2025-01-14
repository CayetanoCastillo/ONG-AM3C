import './inicio.css'

const inicio = () => {
    return (
        <div>
            <h1>Bienvenidos a la Asociación de Mujeres de Tres Cantos</h1>
            <h2>Juntas Crecemos y Transformamos el Futuro</h2>
            <div className='grid grid50'>
                <p>Nuestra <b>asociación de Mujeres de Tres Cantos</b> es mucho más que un lugar de
                    encuentro: es una comunidad donde el <b>crecimiento personal</b>, el apoyo mutuo y la
                    transformación social cobran vida. Aquí, las <b>mujeres</b> toman la iniciativa, lideran
                    actividades y crean un ambiente inclusivo para todos, <b>mujeres</b> y hombres, que
                    deseen construir un mundo más justo y equitativo.
                    Desde nuestros primeros días hasta hoy, hemos crecido juntas, apoyándonos y
                    ayudándonos a superar barreras, guiadas siempre por el sueño de nuestra fundadora,
                    Laura Muñiz, quien inspira a cada nueva socia a sumarse a esta red de
                    empoderamiento y fraternidad.
                </p>
                <img src="./foto am3c.jpg" alt="" />
            </div>
            <div className='grid grid50'>
                <img src="./foto am3c.jpg" alt="" />
                <p><b>Mision </b><br /><br />Somos un espacio seguro, de crecimiento
                    y <b>empoderamiento</b> para construir una
                    sociedad más equitativa. A través del
                    apoyo mutuo y la solidaridad, rompemos
                    barreras y fortalecemos nuestra
                    comunidad, trabajando juntos para
                    generar un cambio real.</p>

            </div>
            <div className='grid grid50'>
                <p><b>Vision</b><br /><br />Queremos ser un referente de
                    transformación en Madrid, creando
                    oportunidades para todas las generaciones.
                    Nos enfocamos en proyectos para cambiar
                    vidas, como la vivienda para migrantes y la
                    prevención del suicidio, construyendo un
                    futuro más inclusivo y lleno de esperanza.</p>
                <img src="./foto am3c.jpg" alt="" />
            </div>
            <footer>
                <p>&copy; 2025 AM3C Creciendo Juntas. Todos los derechos reservados. Prohibida su reproducción total o parcial. | Política de Privacidad | Términos y Condiciones</p>
            </footer>
        </div>

    )
}

export default inicio