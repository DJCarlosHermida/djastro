import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // parámetros de EmailJs
    const serviceID = 'service_4jqxzz4';
    const templateID = 'template_lz9kgqk';
    const userID = 'Tl_j7DPBtIDvJJn8z';
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Correo enviado con éxito:', response.status, response.text);
        alert('Correo enviado con éxito!');
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <section>
      <h3>Contacto</h3>
      <div>
        <p><i>Ante cualquier consulta, duda o comentario, no dudes en utilizar las siguientes vías de
          comunicación.</i>
          </p>

      </div>
      <hr />


      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Nombre'
            title='Ingrese su Nombre'
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Email'
            title='Ingrese su Correo'
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Mensaje'
            title='Ingrese su Consulta, Duda o Comentario'
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <hr />
      {/* Datos de Contacto Adicionales */}
      <p>Contacto: <a href="mailto:djcarloshermida@outlook.es" target='_blank' title='Enviar correo electrónico'>djcarloshermida@outlook.es</a></p>
      <p>Teléfono: <a href="https://wa.me/59891332854" target="_blank" title='Iniciar chat'>(+598) 091 332 854</a></p>
      <p>Dirección: <a href="https://maps.app.goo.gl/yjRagfd3kYT9aV1s6" target='_blank' title='Dirección'>Doña Soledad 4760, Montevideo, Uruguay</a>  </p>



      {/* Enlaces a Redes Sociales */}
      <div className="social-media-links">
        <a href="https://www.instagram.com/djcarloshermida" title='Instagram' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/djcarloshermida" title='Linkedin' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
