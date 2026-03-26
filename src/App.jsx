import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './formulario'
import Listado from './listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Listado />
        </div>
      </div>
    </>
  )
}

export default App
