import { useState, useEffect, useCallback, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let stringUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbersUse = "0123456789";
    let symbolsUse = "!@#$%^&*()_+";
    let pass = "";

    if (symbols) {
      stringUse += symbolsUse;
    }
    if (numbers) {
      stringUse += numbersUse;
    }

    for (let i = 1; i <= length; i++) {
      pass += stringUse.charAt(Math.floor(Math.random() * stringUse.length + 1));
    }
    setPassword(pass);

  }, [length, symbols, numbers, setPassword]);

  const passToClip = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, symbols, numbers, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'> Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passToClip}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numbers}
              id='numberInput'
              onChange={() => {
                setNumbers((numbers) => (!numbers));
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={symbols}
              id='symbolsAllowed'
              onChange={() => {
                setSymbols((symbols) => (!symbols));
              }} />
            <label htmlFor='symbolsAllowed'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
