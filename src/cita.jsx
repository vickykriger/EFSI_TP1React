import react from 'react'

const Cita = ({cita}) => {    
    return (
        <div className="cita">
            <p>Mascota: {cita.nombre}</p>
            <p>Dueño: {cita.dueno}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Sintomas: {cita.sintomas}</p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
};

export default Cita;