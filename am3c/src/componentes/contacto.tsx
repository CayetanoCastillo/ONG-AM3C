import './contacto.css';

const contacto = () => {
    return (
        <div>
            <h1>¡Hablemos y Conectemos!</h1>
            <h2>Estamos aquí para escucharte</h2>
            <div className='grid grid50'>
                <div className='grid grid33'>
                    <p>Si deseas unirte a nuestra <b>asociación de Mujeres de Tres Cantos</b>, conocer más sobre
                        nuestras actividades o tienes alguna duda, no dudes en contactarnos.
                        Nos encantaría contar contigo en nuestra comunidad y acompañarte en el camino de
                        crecimiento y <b>empoderamiento</b>.
                    </p>
                    <div className="mapa">
                        <h2>Nuestra Ubicación</h2>
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps?q=Tres+Cantos,+Madrid&z=15&output=embed"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <a
                            href="https://www.google.com/maps?q=Tres+Cantos+Madrid&z=15&output=embed"
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
                            <div className="preferencias">
                                <br />
                                <br />
                                <label>
                                    <input type="checkbox" name="contact_preference" value="email" /> Correo electrónico
                                </label>
                                <label>
                                    <input type="checkbox" name="contact_preference" value="phone" /> Teléfono
                                </label>
                            </div>
                            <br />
                            <div className="confirmar">
                                <label>
                                    <input type="checkbox" name="consent" required />
                                    Acepto la política de protección de datos y autorizo a AM3C "Creciendo Juntas" a utilizar mis datos únicamente para responder a mi solicitud de contacto.
                                </label>
                            </div>

                            <button type="submit">Enviar Mensaje</button>
                        </form>
                    </section>
                </div>
            </div>
            <div className='grid grid50 redes'>
                <a href="https://www.adidas.es/"><img src="./Facebook.png" alt="" /></a>
                <a href="https://www.thecoreschool.com/"><img src="./Instagram.png" alt="" /></a>
            </div>
        </div>
    )
}

export default contacto;

