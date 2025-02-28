import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Componente } from './componente/Componente'

function App() {
  const [count, setCount] = useState('')
  console.log(count)

  return (
    <>
      <Componente componente={setCount}/>

    </>
  )
}

export default App
