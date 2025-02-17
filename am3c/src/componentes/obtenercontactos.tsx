import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';


const obtenercontactos = () => {

    const nombre = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    const asunto = useRef<HTMLInputElement>(null);
    const mensaje = useRef<HTMLInputElement>(null);
    let [data, actualizarData] = useState<Contacto[]>([]);

    interface Contacto {
        _id: string;
        nombre: string;
        email: string;
        telefono: string;
        asunto: string;
        mensaje: string;
    }

    useEffect(() =>{
        fetch("http://localhost:8080/obtenerContactos")
            .then((datos) => {
                return datos.json();
            })
            .then((datos) => {
                actualizarData(datos);
            })
    })

    return(
        <div className='contactos'>
            <h1>listado de contactos de AM3C</h1>
            <section className=''>
                {
                    data.map(articulo => {
                        return(
                            <div className='grid grid33'>
                                <p>{articulo._id}</p>
                                <p>{articulo.nombre}</p>
                                <p>{articulo.email}</p>
                                <p>{articulo.telefono}</p>
                                <p>{articulo.asunto}</p>
                                <p>{articulo.mensaje}</p>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default obtenercontactos;