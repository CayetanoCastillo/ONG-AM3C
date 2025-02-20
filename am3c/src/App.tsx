import {ParallaxProvider} from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from './index';
import Header from './componentes/header'
import Inicio from './componentes/inicio';
import QuienesSomos from './componentes/QuienesSomos';
import Equipo from './componentes/Equipo';
import NuestraHistoria from './componentes/NuestraHistoria';
import Calendario from './componentes/calendario';
import Servicio from './componentes/servicio';
import Evento from './componentes/evento';
import Contacto from './componentes/contacto';
import Obtenercontactos from './componentes/obtenercontactos';
import Socias from './componentes/socias';
import Footer from './componentes/footer'
import HazteSocia from './componentes/HazteSocia';
import InsertarCalendario from './componentes/insertarCalendario';

const App = () => {

  return(
    <ParallaxProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={<Index />}
        >
        </Route>
        <Route
          path="/header"
          element={<Header />}
        >
        </Route>
        <Route
          path="/inicio"
          element={<Inicio />}
        >
        </Route>
        <Route
          path="/quienesSomos"
          element={<QuienesSomos />}
        >
        
        </Route>
        <Route
          path="/equipo"
          element={<Equipo />}
        >
        
        </Route>
        <Route
          path="/nuestraHistoria"
          element={<NuestraHistoria />}
        >
        </Route>
        <Route
          path="/calendario"
          element={<Calendario />}
        >
        </Route>
        <Route
          path="/servicio"
          element={<Servicio />}
        >
        </Route>
        <Route
          path="/evento"
          element={<Evento />}
        >
        </Route>
        <Route
          path="/contacto"
          element={<Contacto />}
        >
        </Route>
        <Route
          path="/socias"
          element={<Socias />}
        >
        </Route>
        <Route
          path="/obtenercontactos"
          element={<Obtenercontactos />}
        >
        </Route>
        <Route
          path="/footer"
          element={<Footer />}
        >
        </Route>
        <Route
          path="/HazteSocia"
          element={<HazteSocia />}
        >
        </Route>
        <Route
          path="/InsertarCalendario"
          element={<InsertarCalendario />}
        >
        </Route>
        </Route>
      </Routes>
    </Router>
      </ParallaxProvider>
  )
}

export default App
