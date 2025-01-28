import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from './index';
import Header from './componentes/header'
import Inicio from './componentes/inicio';
import QuienesSomos from './componentes/QuienesSomos';
import NuestraHistoria from './componentes/NuestraHistoria';
import Calendario from './componentes/calendario';
import Servicio from './componentes/servicio';
import Evento from './componentes/evento';
import Contacto from './componentes/contacto';
import Footer from './componentes/footer'

const App = () => {

  return(
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
          path="/evento"
          element={<Evento />}
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
          path="/footer"
          element={<Footer />}
        >
        </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App