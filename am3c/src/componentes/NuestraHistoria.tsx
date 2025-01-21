import './NuestraHistoria.css';

const NuestraHistoria = () => {
    return (
        <div>
            <h1>NUESTRA HISTORIA:</h1>
            <h2>De la visión de una mujer al crecimiento de una comunidad</h2>
            <div className='grid historia'>
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
                    <div className='grid grid50'>
                        <img src="./foto am3c.jpg" alt="" />
                        <img src="./foto am3c.jpg" alt="" />
                    </div>
            </div>
        </div>
    )
}

export default NuestraHistoria;