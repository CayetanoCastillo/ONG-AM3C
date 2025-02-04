import './footer.css';

const footer = () => {
    return (
        <div className='footer'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <footer>
                <div className='grid grid33'>
                    <section className='informacion'>
                        <h3 className='tituinfo'>AM3C Creciendo Juntas</h3>
                        <ul>
                            Centro 21 de Marzo, Tres Cantos Madrid <br />
                            <b>Whatsapp:</b>722 482 122 <br />
                            <b>Correo:</b>asociacionmujeres3c@gmail.com <br />
                            <b>Horarios: </b><br />
                            Lunes de 18:00-20:00 <br />
                            Viernes 11:00-13:30 <br />
                        </ul>
                    </section>
                    <section>
                        <h3>Politicas Y Terminos</h3>
                        <ul>
                            Contacto <br />
                            Aviso Legal <br />
                            Política de privacidad <br />
                            Política de cookies <br />
                            Mapa Web <br />
                            Donde estamos <br />
                        </ul>
                    </section>
                    <section>
                        <h3 className='tituinf'>Contactanos</h3>
                        <ul className='grid grid5'>
                            <a href=""><img src="./Instagram.png" alt="instagram" /></a>
                            <a href=""><img src="./Facebook.png" alt="facebook" /></a>
                            <a 
                                href="https://api.whatsapp.com/send/?phone=722482122&text=Hola" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src="./WhatsApp.png" alt="whatsapp" />
                            </a>
                            <a 
                                href="mailto:asociacionmujeres3c@gmail.com?subject=Hola&body=Escribe%20tu%20mensaje%20aquí" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src="./Gmail.png" alt="gmail" />
                            </a>
                        </ul>
                    </section>
                    <section>

                    </section>
                </div>
            </footer>
        </div>
    )
}

export default footer;
