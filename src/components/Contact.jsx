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
    const templateID = '__ejs-test-mail-service__';
    const userID = 'x4gqv-SuaTXaHJZXBtaY5';
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
      <p>Contacto: djcarloshermida.dch@gmail.com</p>
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
    </section>
  );
};

export default Contact;
