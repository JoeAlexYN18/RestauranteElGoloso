import React, { useState, useEffect } from "react";
import "./ReservacionesPage.css";

const ReservacionesPage = () => {
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

  const handleCancelReservation = (index) => {
    const updatedReservas = reservas.filter((_, i) => i !== index);
    setReservas(updatedReservas);
  };

  return (
    <div className="reservations-page">
      <h2 className="page-title">Bienvenido a la Página de Reservas</h2>
      {!formVisible && (
        <button className="reserve-button" onClick={handleShowForm}>
          Reservar Ahora
        </button>
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
                Local La Victoria - Av. los Incas 145, La Victoria 14007. Chiclayo - Perú
              </option>
            </select>
          </div>
          <textarea
            placeholder="Comentarios adicionales"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
          <div className="button-container">
            <button className="reserve-button-large" type="submit">
              Confirmar Reserva
            </button>
          </div>
        </form>
      </div>

      <div className="reservas-confirmadas">
        <h2>Reservas Confirmadas</h2>
        {reservas.length === 0 ? (
          <p>No hay reservas confirmadas aún.</p>
        ) : (
          <div className="reservas-list">
            {reservas.map((reserva, index) => (
              <div key={index} className="confirmation-box">
                <h3>Reserva</h3> 
                <p><strong>Nombre:</strong> {reserva.nombre}</p>
                <p><strong>Email:</strong> {reserva.email}</p>
                <p><strong>Teléfono:</strong> {reserva.telefono}</p>
                <p><strong>Fecha:</strong> {reserva.fecha}</p>
                <p><strong>Hora:</strong> {reserva.hora} {reserva.amPm}</p>
                <p><strong>Local:</strong> {reserva.local}</p>
                <p><strong>Cantidad de Personas:</strong> {reserva.cantidadPersonas}</p>
                <p><strong>Comentarios:</strong> {reserva.comentarios}</p>
                <button onClick={() => handleCancelReservation(index)} className="cancel-button">
                  Cancelar Reserva
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservacionesPage;
