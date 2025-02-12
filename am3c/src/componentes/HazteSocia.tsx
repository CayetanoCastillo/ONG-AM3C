import './HazteSocia.css';
import {Helmet} from 'react-helmet';
import{useRef} from 'react';

const HazteSocia = () => {

    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const apellido2 = useRef<HTMLInputElement>(null);
    const dni = useRef<HTMLInputElement>(null);
    const domicilio = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);


    const enviar = (event:any) => {
        event.preventDefault();
        const contacto = {
            nombre: nombre.current?.value,
            apellido: apellido.current?.value,
            apellido2: apellido2.current?.value,
            dni: dni.current?.value,
            domicilio: domicilio.current?.value,
            correo: email.current?.value,
            telefono: telefono.current?.value,
        }
        console.log(contacto);
        fetch("http://localhost:8080/HazteSocia",
            {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contacto)
            }
        )
    }

    return (
        <div className='HazteSocia'>
            <Helmet>
            <meta name="description" content="hdshadhsad"></meta>
            <meta name="keywords" content="hdsahdhsad"></meta>
            <title>Hazte Socia</title>
            </Helmet>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <h1>UNETE A NOSOTRAS</h1>
            <h3>Rellena este formulario Y unete a nosotras!</h3>
            <form method="POST" onSubmit={enviar}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input type="text" ref={nombre} id="name" name="name" placeholder="Escribe tu nombre completo" required />

                <label htmlFor="apellido">Primer apellido:</label>
                <input type="text" ref={apellido} id="apellido" name="apellido" placeholder="Escribe tu primer apellido" required />

                <label htmlFor="apellido2">Segundo apellido:</label>
                <input type="text" ref={apellido2} id="apellido" name="apellido" placeholder="Escribe tu segundo apellido" required />

                <label htmlFor="dni">DNI:</label>
                <input type="text" ref={dni} id="dni" name="dni" placeholder="Escribe tu DNI" required />

                <label htmlFor="domicilio">Domicilio:</label>
                <input type="text" ref={domicilio} id='domicilio' name='domicilio' placeholder='Escribe aqui tu domicilio' required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" ref={email} id='email' name='email' placeholder='Escribe aqui tu correo electronico' required />

                <label htmlFor="telefono">Numero de telefono:</label>
                <input type="number" ref={telefono} id='number' name='number' placeholder='Escribe aqui tu numero de telefono' required />


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