import React, { useState } from 'react';
import './ContactanosPage.css';

function ContactanosPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    message: '',
    option1: false,
    option2: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con los siguientes datos:', formData);
    setFormData({
      name: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      message: '',
      option1: false,
      option2: false
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p>
          Los comentarios de los clientes son una forma importante de mejorar
          nuestros servicios. Nos gustaría escuchar sus comentarios en forma de
          sugerencias, comentarios, quejas y cualquier otra información
          relacionada con nuestra empresa y nuestros servicios.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombres:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Por favor Ingrese su nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellidos:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Por favor Ingrese su apellido"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Por favor Ingrese su correo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Por favor Ingrese su dirección"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Por favor Ingrese su teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Ingrese el Mensaje"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="option1"
                checked={formData.option1}
                onChange={handleChange}
              />
              <span>
                He leído y acepto las políticas de privacidad de El Goloso
              </span>
            </label>
          </div>
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="option2"
                checked={formData.option2}
                onChange={handleChange}
              />
              <span>
                Autorizo recibir ofertas, promociones y encuestas de El Goloso
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar tu comentario
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactanosPage;
