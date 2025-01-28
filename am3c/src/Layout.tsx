import {Outlet} from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;