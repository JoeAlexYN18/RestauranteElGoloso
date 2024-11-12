import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    numero: '',
    correo: '',
    fecha: '',
    hora: ''
  });

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("12");
  const [amPm, setAmPm] = useState("AM");
  const [local, setLocal] = useState("Local Chiclayo");
  const [cantidadPersonas, setCantidadPersonas] = useState(2);
  const [comentarios, setComentarios] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem("reservas"));
    if (storedReservas) {
      setReservas(storedReservas);
    }
  }, []);

  useEffect(() => {
    if (reservas.length > 0) {
      localStorage.setItem("reservas", JSON.stringify(reservas));
    }
  }, [reservas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && email && telefono && fecha && hora && cantidadPersonas && local) {
      const nuevaReserva = {
        nombre,
        email,
        telefono,
        fecha,
        hora,
        amPm,
        local,
        cantidadPersonas,
        comentarios,
      };
      setReservas([...reservas, nuevaReserva]);
      setFormVisible(false);
    } else {
      alert("Por favor complete todos los campos.");
    }
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleShowForm = () => {
    setFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirmReservation = () => {
    window.location.href = `/reservaciones?nombre=${formData.nombre}&apellido=${formData.apellido}&numero=${formData.numero}&correo=${formData.correo}&fecha=${formData.fecha}&hora=${formData.hora}`;
  };

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="home-container">
        <h1>EL GOLOSO - CHICLAYO</h1>
        <p className="description">
          Disfruta de la mejor experiencia gastronómica en el corazón de Chiclayo. Nuestro equipo se enorgullece de ofrecer una fusión de sabores locales y una atmósfera acogedora.
        </p>
        <div className="info">
          <p><strong>Horario:</strong> Lunes a Domingo, 07:00 am - 11:00 pm</p>
          <p><strong>Dirección:</strong> 1427 Alfonso Ugarte</p>
        </div>
        <button className="reserve-button" onMouseDown={(e) => e.preventDefault()} onClick={handleShowForm}>
          Reservar ahora
        </button>
      </div>

      <div className="content-section">
        <div className="text-content">
          <h2>EL GOLOSO</h2>
          <p className="subtitle">Restaurante</p>
          <div className="divider"></div>
          
          <p className={`description-text ${isExpanded ? 'expanded' : ''}`}>
            Somos un restaurante líder con más de 10 años de tradición, enfocado en preservar la sazón de la gastronomía peruana.
            El Goloso es más que un restaurante, es un hogar y lo demostramos en la calidez de nuestra atención en cada
            visita a esta casa y en los detalles de cada plato.
            
            {isExpanded && (
              <div className="expanded-text">
                Además, contamos con una variedad de platos exclusivos que combinan lo mejor de la cocina tradicional peruana con toques innovadores. Nos encanta sorprender a nuestros clientes con experiencias culinarias únicas.
              </div>
            )}
          </p>
          
          <button 
            className="read-more-button" 
            onClick={toggleContent}
            onMouseDown={(e) => e.preventDefault()}
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
        </div>

        <div className="image-gallery">
          <img 
            className="main-image" 
            src="https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg" 
            alt="Main Dish" 
            onClick={() => openImageModal('https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg')}
          />
          <div className="side-images">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1" 
              alt="Side Dish 1" 
              onClick={() => openImageModal('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1')} 
            />
          </div>
        </div>
      </div>

      {selectedImage && isModalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <span className="close-button" onClick={closeImageModal}>X</span>
          </div>
        </div>
      )}

      {formVisible && (
        <div className="form-overlay" onClick={handleCloseForm}></div>
      )}

      <div className={`form-container ${formVisible ? "" : "hidden"}`} onClick={(e) => e.stopPropagation()}>
        <h2>Reserva en {local}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-row same-line">
            <div className="time-picker">
              <select
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                value={amPm}
                onChange={(e) => setAmPm(e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <select
              value={cantidadPersonas}
              onChange={(e) => setCantidadPersonas(e.target.value)}
            >
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
              <option value="21">+20</option>
            </select>
          </div>
          <div className="form-row">
            <select
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            >
              <option value="Local Chiclayo">
                Local Chiclayo - 1427 Alfonso Ugarte, Chiclayo - Perú
              </option>
              <option value="Local La Victoria">
                Local La Victoria - Av. los Incas 145, La Victoria 14007, Chiclayo - Perú
              </option>
            </select>
          </div>
          <textarea
            placeholder="Comentarios adicionales"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
          <button type="submit">Confirmar reserva</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
