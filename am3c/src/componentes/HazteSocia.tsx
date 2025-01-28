import './HazteSocia.css';

const HazteSocia = () => {
    return (
        <div className='HazteSocia'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <h1>UNETE A NOSOTRAS</h1>
            <h3>Rellena este formulario Y unete a nosotras!</h3>
            <form>
                <label htmlFor="name">Nombre completo:</label>
                <input type="text" id="name" name="name" placeholder="Escribe tu nombre completo" required />

                <label htmlFor="apellido">Primer apellido:</label>
                <input type="text" id="apellido" name="apellido" placeholder="Escribe tu primer apellido" required />

                <label htmlFor="apellido">Segundo apellido:</label>
                <input type="text" id="apellido" name="apellido" placeholder="Escribe tu segundo apellido" required />

                <label htmlFor="dni">DNI:</label>
                <input type="text" id="dni" name="dni" placeholder="Escribe tu DNI" required />

                <label htmlFor="domicilio">Doomicilio:</label>
                <input type="text" id='domicilio' name='domicilio' placeholder='Escribe aqui tu domicilio' required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id='email' name='email' placeholder='Escribe aqui tu correo electronico' required />

                <label htmlFor="number">Numero de telefono:</label>
                <input type="number" id='number' name='number' placeholder='Escribe aqui tu numero de telefono' required />


                <div className="confirmar">
                    <label>
                        <input type="checkbox" name="consent" required />
                        Acepto la política de protección de datos y autorizo a AM3C "Creciendo Juntas" a utilizar mis datos únicamente para rellenar  mi solicitud de socia.
                    </label>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>

        </div>
    )
}

export default HazteSocia;