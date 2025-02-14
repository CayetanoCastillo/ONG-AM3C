import { Helmet } from 'react-helmet';
import './tienda.css';

const Tienda: React.FC = () => {
    return (
        <div className="tienda">
            <Helmet>
                <meta name="description" content="Descubre los productos de la Asociación de Mujeres de Tres Cantos. Camisetas, bolsas, gorras y más para apoyar nuestra causa." />
                <meta name="keywords" content="asociacion de mujeres, productos solidarios, reiki, atención psicológica, asesoría jurídica" />
                <title>Productos de AM3C | Asociación de Mujeres de Tres Cantos</title>
            </Helmet>

            <h1>Productos de AM3C</h1>
            <h2>Tu apoyo impulsa nuestro proyecto</h2>

            <section className="tienda-contenido">
                <p>En la <b>Asociación de Mujeres de Tres Cantos</b>, ofrecemos productos solidarios para contribuir al bienestar y crecimiento de nuestra comunidad.</p>

                <div className="grid grid50">
                    <figure>
                        <img src="./camiseta.png" alt="Camiseta solidaria AM3C" />
                        <figcaption><b>Camiseta solidaria</b> <br /> Algodón 100%, disponible en varias tallas.</figcaption>
                    </figure>
                    <figure>
                        <img src="./bolsa.png" alt="Bolsa ecológica AM3C" />
                        <figcaption><b>Bolsa ecológica</b> <br /> Hecha con materiales reciclados y reutilizables.</figcaption>
                    </figure>
                    <figure>
                        <img src="./gorras.png" alt="Gorra AM3C" />
                        <figcaption><b>Gorra exclusiva</b> <br /> Ajustable y disponible en diferentes colores.</figcaption>
                    </figure>
                    <figure>
                        <img src="./bandera.png" alt="Bandera de apoyo AM3C" />
                        <figcaption><b>Bandera solidaria</b> <br /> Representa nuestro compromiso con la comunidad.</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default Tienda;
