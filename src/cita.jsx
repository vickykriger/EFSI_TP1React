import React from 'react'; 

const Cita = ({ cita, eliminarCita }) => { 
    return (
        <div className="cita">
            <p>Mascota: {cita.nombre}</p>
            <p>Dueño: {cita.dueno}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Sintomas: {cita.sintomas}</p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &times;
            </button>
        </div>
    );
};

export default Cita;