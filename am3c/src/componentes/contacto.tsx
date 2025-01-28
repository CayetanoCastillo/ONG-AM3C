import './contacto.css';

const contacto = () => {
    return (
        <div className='contacto'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <h1>¡Hablemos y Conectemos!</h1>
            <h2>Estamos aquí para escucharte</h2>
            <div className='grid grid50'>
                <div>
                    <p>Si deseas unirte a nuestra <b>asociación de Mujeres de Tres Cantos</b>, conocer más sobre
                        nuestras actividades o tienes alguna duda, no dudes en contactarnos.
                        Nos encantaría contar contigo en nuestra comunidad y acompañarte en el camino de
                        crecimiento y <b>empoderamiento</b>.
                    </p>
                    <div className="mapa">
                        <h2>Nuestra Ubicación</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.384848174664!2d-3.7136316999999996!3d40.599331899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d5b04c81aaa3%3A0xab7d66b2ff1cd6e1!2sAsociaci%C3%B3n%20de%20Mujeres%20de%20Tres%20Cantos%20-%20Creciendo%20Juntas!5e0!3m2!1ses!2ses!4v1736945446378!5m2!1ses!2ses"
                         width="400" 
                         height="400" 
                         style={{border:0}} 
                         allowFullScreen="" 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <a
                            href="https://www.google.com/maps/place/Asociaci%C3%B3n+de+Mujeres+de+Tres+Cantos+-+Creciendo+Juntas/@40.5993319,-3.7136317,17z/data=!3m1!4b1!4m6!3m5!1s0xd43d5b04c81aaa3:0xab7d66b2ff1cd6e1!8m2!3d40.5993319!4d-3.7136317!16s%2Fg%2F11tfd7mh74?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-button"
                        >
                            Ver en Google Maps
                        </a>
                    </div>

                </div>
                <div className='formulario'>
                    <section className="form-contacto">
                        <h2>Formulario de Contacto</h2>
                        <form action="#" method="POST">
                            <label htmlFor="name">Nombre completo:</label>
                            <input type="text" id="name" name="name" placeholder="Escribe tu nombre completo" required />

                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required />

                            <label htmlFor="phone">Teléfono de contacto:</label>
                            <input type="tel" id="phone" name="phone" placeholder="Escribe tu número de teléfono" />

                            <label htmlFor="subject">Asunto del mensaje:</label>
                            <input type="text" id="subject" name="subject" placeholder="Escribe el asunto" required />

                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                            <br />
                            <br />
                            <div className="confirmar">
                                <label>
                                    <input type="checkbox" name="consent" required />
                                    Acepto la política de protección de datos y autorizo a AM3C "Creciendo Juntas" a utilizar mis datos únicamente para responder a mi solicitud de contacto.
                                </label>
                            </div>
                            <br />
                            <br />
                            <button type="submit">Enviar Mensaje</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default contacto;

