import React, { useState } from 'react';

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    nombre: '',
    dueno: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const { nombre, dueno, fecha, hora, sintomas } = cita;

  const enviarCita = e => {
    e.preventDefault();

    if (nombre.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      alert("Todos los campos son obligatorios");
      return;
    }
    const citaConId = {
      ...cita,
      id: Date.now()
    };
    crearCita(citaConId);

    actualizarCita({
      nombre: '',
      dueno: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={enviarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={nombre}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={dueno}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;