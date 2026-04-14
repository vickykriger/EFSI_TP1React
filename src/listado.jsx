import Cita from './cita'
import React, { useState } from 'react';

const Listado = ({listado, eliminarCita}) => {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>

            {listado.map(item => (
                <Cita 
                    key={item.id}
                    cita={item} 
                    eliminarCita={eliminarCita}
                />
            ))}           
        </div>
    );
};

export default Listado;