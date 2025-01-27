import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} Todos los derechos reservados. <br />
                <a href="mailto:djcarloshermida.dch@gmail.com" target='_blank'><i>djcarloshermida</i></a>
            </p>
        </footer>
    );
};

export default Footer;
