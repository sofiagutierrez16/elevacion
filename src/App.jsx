import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Componente } from './componente/Componente'
import { Peticion } from './componente/Peticion'

function App() {
  const [buscarPersonaje, setBuscarPersonaje] = useState('')
  console.log(buscarPersonaje)

  return (
    <>
      <Componente componente={setBuscarPersonaje}/>
      <Peticion buscarPersonaje={buscarPersonaje}/>

    </>
  )
}

export default App
