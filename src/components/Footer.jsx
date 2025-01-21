import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} Todos los derechos reservados. <br />
                <a href="mailto:djcarloshermida@outlook.com" target='_blank'><i>djcarloshermida</i></a> <br />
            </p>
        </footer>
    );
};

export default Footer;
