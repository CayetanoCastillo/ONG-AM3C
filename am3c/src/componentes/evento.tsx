import './evento.css';

const Evento = () => {
    return (
        <div className='evento'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <div className='grid'>
            <h1>Eventos Especiales</h1>
            <h2>Encuentros que transforman</h2>
            <p>Desde conferencias inspiradoras hasta <b>actividades comunitarias</b> y de
                empoderamiento, para la <b>Asociación de Mujeres de Tres Cantos</b>, cada evento es una
                oportunidad para profundizar en nuestros valores de fraternidad y <b>transformación
                social</b>.</p>
                <div className='grid grid50'>
                <img  className="reseña" src="./reseña.png" alt="" />
                <img src="./evento.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Evento;