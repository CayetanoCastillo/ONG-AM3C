
import './calendario.css';
import{useRef} from 'react';

const InsertarCalendario = () => {
    const fecha = useRef<HTMLInputElement>(null);
    const info = useRef<HTMLInputElement>(null);

  const enviar = (event:any) => {
    event.preventDefault();
    const contacto = {
        fecha: fecha.current?.value,
        info: info.current?.value,
    }
    console.log(contacto);
    fetch("http://localhost:8080/insertarCalendario",
            {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contacto)
            }
        )
  };

  return (
    <div className='formulario'>
      <h1>Agregar Evento</h1>
      <form method="POST" onSubmit={enviar}>
        <label>
          Fecha (YYYY-M-D):
          <input 
            type='text' 
            ref={fecha}
            placeholder='ej: 2025-10-10'
            name='fecha'
            required 
          />
        </label> <br /><br />
        <label>
          Información del Evento: <br />
          <input 
          type='text'
            ref={info}
            placeholder='Describe el evento'    
            required
          />
        </label> <br /> <br />
        <button type='submit'>Agregar Evento</button>
      </form>
    </div>
  );
};

export default InsertarCalendario;
