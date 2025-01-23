import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <section>
      <h3>Contacto</h3>
        <p><i>Ante cualquier consulta, duda o comentario, no dudes en utilizar las siguientes vías de comunicación. </i><p>
        </p></p>
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
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <hr />
      {/* Datos de Contacto Adicionales */}
      <p>Contacto: <a href="mailto:djcarloshermida@outlook.es" target='_blank'>djcarloshermida@outlook.es</a></p>
      <p>Teléfono: <a href="https://wa.me/59891332854" target="_blank">(+598) 091 332 854</a>
      <p>Dirección: Doña Soledad 4760, Montevideo, Uruguay</p>
        </p>

      {/* Enlaces a Redes Sociales */}
      <div className="social-media-links">
        <a href="https://www.instagram.com/djcarloshermida" title='Instagram' target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/djcarloshermida" title='Linkedin' target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
