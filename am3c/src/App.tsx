import Header from './componentes/header'
import Inicio from './componentes/inicio'
import QuienesSomos from './componentes/QuienesSomos'
import NuestraHistoria from './componentes/NuestraHistoria'
import Contacto from './componentes/contacto' 
import Servicio from './componentes/servicio'
import Evento from './componentes/evento'
import Footer from './componentes/footer'
import './App.css'

const App = () => {
  return(
    <>
      <Header></Header>
      <Inicio></Inicio>
      <QuienesSomos></QuienesSomos>
      <NuestraHistoria></NuestraHistoria>
      <Contacto></Contacto>
      <Servicio></Servicio>
      <Evento></Evento>
      <Footer></Footer>
    </>
  )
}


export default App
