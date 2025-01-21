import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/services" element={<Services />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
                <Footer />
        </Router>
    );
};

export default App;