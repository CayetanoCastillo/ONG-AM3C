import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './obtenercontactos.css';

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
            <h1>Listado de contactos de AM3C</h1>
            <section className=''>
                {
                    data.map(articulo => {
                        return(
                            <div className='grid grid33'>
                                <p>id: {articulo._id}</p>
                                <p>nombre: {articulo.nombre}</p>
                                <p>correo: {articulo.email}</p>
                                <p>telefono: {articulo.telefono}</p>
                                <p>asunto: {articulo.asunto}</p>
                                <p>mensaje: {articulo.mensaje}</p>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default obtenercontactos;