import React, { useState, useEffect } from 'react';
import Formulario from './formulario';
import Listado from './listado';

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);
  
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