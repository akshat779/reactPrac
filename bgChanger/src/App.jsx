import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen inset-x-0'  style={{backgroundColor: color}}>
      <div className='w-screen flex justify-center items-center fixed top-40 bg-black '>
        <h1 className='p-4 text-white rounded-xl text-3xl'>Background Changer</h1>
      </div>
      <div className='flex fixed bottom-12 justify-center flex-wrap items-center w-full'>
        <div className='rounded-full flex flex-wrap justify-center items-center gap-3 border-2 px-4 py-2 bg-black'>
          {/* buttons */}
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("black")}>
            Black
          </button>
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("green")}>
            Green
          </button>
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("blue")}>
            Blue
          </button>
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("magenta")}>
            Magenta
          </button>
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("grey")}>
            Grey
          </button>
          <button className='border-2 px-4 py-2 rounded-full bg-white' onClick={()=>setColor("skyblue")}>
            Skyblue
          </button>
          
        </div> 
      </div>
    </div>
  )
}

export default App
