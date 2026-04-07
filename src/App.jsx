import Formulario from './formulario'
import Listado from './listado'

function App() {
  
  const list = [
    {nombre:"ailu",dueno:"fedru",fecha:"11/08/2024",hora:"00:11",sintomas:"ghosteadora"},
    {nombre:"ailu",dueno:"cania",fecha:"30/10/2025",hora:"00:10",sintomas:"forzadora"},
    {nombre:"ailu",dueno:"fidelgoldman",fecha:"04/03/2026",hora:"04:10",sintomas:"segundera"}
  ]

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Listado listado={list} />
        </div>
      </div>
    </>
  )
}

export default App
