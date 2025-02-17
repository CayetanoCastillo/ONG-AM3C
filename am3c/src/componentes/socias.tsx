import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './socias.css';

const socias = () => {

    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const apellido2 = useRef<HTMLInputElement>(null);
    const dni = useRef<HTMLInputElement>(null);
    const domicilio = useRef<HTMLInputElement>(null);
    const correo = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    let [data, actualizarData] = useState<Socia[]>([]);

    interface Socia {
        _id: string;
        nombre: string;
        apellido: string;
        apellido2: string;
        dni: string;
        domicilio: string;
        correo: string;
        telefono: string;
    }

    useEffect(() => {
        fetch("http://localhost:8080/obtenerSocias")
            .then((datos) => {
                return datos.json();
            })
            .then((datos) => {
                actualizarData(datos);
            })
    })


    return(
        <div className='socias'>
            <h1>Listado de socias de AM3C</h1>
            <section className=''>
                {
                    data.map(articulo => {
                        return(
                            <div className='grid grid33'>
                                <p>id: {articulo._id}</p>
                                <p>nombre: {articulo.nombre}</p>
                                <p>apellido: {articulo.apellido}</p>
                                <p>apellido2: {articulo.apellido2}</p>
                                <p>dni: {articulo.dni}</p>
                                <p>domicilio: {articulo.domicilio}</p>
                                <p>correo: {articulo.correo}</p>
                                <p>telefono: {articulo.telefono}</p>
                            </div>

                        )
                    })
                }
            </section>
        </div>
    )

}

export default socias;