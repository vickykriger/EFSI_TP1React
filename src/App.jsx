import React, { useState } from 'react';
import Formulario from './formulario';
import Listado from './listado';

function App() {
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <div className="row">
        <Formulario crearCita={crearCita} />
        <Listado listado={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}
export default App;