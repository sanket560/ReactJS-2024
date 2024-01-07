import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={[}]`~";

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenerator()

  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <h1 className='text-4xl text-white'>Password Generator</h1>
        <div className='mx-auto px-4 my-8'>
          <div className='flex overflow-hidden mb-4'>
            <input
              className='outline-none w-full py-1 px-3 text-lg rounded-lg'
              placeholder='password'
              type='text'
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPassword} className='bg-white hover:bg-slate-400 hover:text-white text-black px-3 py-2 rounded-lg ml-3'>
              Copy
            </button>
          </div>
          <div className='flex gap-x-2'>
            <div className='flex items-center my-3'>
              <label className='text-white mr-2'>length : {length}</label>
              <input
                className='cursor-pointer'
                type='range'
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                min={6}
                max={100}
                value={length}
              />
            </div>
            <div className='flex items-center my-7 gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev)
                }}
               />
              <label className='text-white'>Allow Number</label>
            </div>
            <div className='flex items-center my-7 gap-x-1'>
              <input
               type='checkbox'
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                }}
               />
              <label className='text-white'>Allow Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
