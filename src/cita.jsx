import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Cita = () => {
    return (
        <div className="cita">
            <p>Mascota: Ailu</p>
            <p>Dueño: Ana Kogan</p>
            <p>Fecha: 01/07</p>
            <p>Hora: 19:26</p>
            <p>Sintomas: Se super alegra</p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
};

export default Cita;