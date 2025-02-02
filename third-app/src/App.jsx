import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className='bg-red-500 text-white p-5 rounded'>Tailwind Css</h1>

    <Card username="Noman"/>
    <Card username="Kamran"/>

    </>
  )
}

export default App
