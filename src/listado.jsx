import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cita from './cita'

const Listado = () => {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita />
            <Cita />
            <Cita />
        </div>
    );
};

export default Listado;