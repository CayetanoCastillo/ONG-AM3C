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
        <div>
            <h1 className='titulo'>Listado de socias de AM3C</h1>
            <section className=''>
                {
                    data.map(articulo => {
                        return(
                            <div>
                                <p>{articulo._id}</p>
                                <p>{articulo.nombre}</p>
                                <p>{articulo.apellido}</p>
                                <p>{articulo.apellido2}</p>
                                <p>{articulo.dni}</p>
                                <p>{articulo.domicilio}</p>
                                <p>{articulo.correo}</p>
                                <p>{articulo.telefono}</p>
                            </div>

                        )
                    })
                }
            </section>
        </div>
    )

}

export default socias;