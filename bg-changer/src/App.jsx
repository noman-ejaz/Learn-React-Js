import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState("red")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>

<div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2"> 

  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setColor("blue")}>
  Blue
</button>

<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setColor("red")}>
  Red
</button>

<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setColor("green")}>
  Green
</button>

<button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setColor("pink")}>
  Pink
</button>

  </div>
</div>

    </div>

    
  )
}

export default App
