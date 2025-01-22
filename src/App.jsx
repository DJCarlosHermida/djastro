import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Gallery from "./components/Gallery.jsx";
import Remix from "./components/Remix.jsx";

const App = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(()=> {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Router>
            <Header />
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/gallery">Galería</Link></li>
                        <li><Link to="/remix">Remix</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/aboutus" element={<Aboutus />}/>
                    <Route path="/services" element={<Services />}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/remix" element={<Remix />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
                <Footer />
        </Router>
    );
};

export default App;