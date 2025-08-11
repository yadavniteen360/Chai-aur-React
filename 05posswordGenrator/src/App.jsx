import { useState, useCallback , useEffect ,useRef} from 'react'



function App() {
  const [lenght, setlenght] = useState(8)
  const [numberallw, setnumberallw] =useState(false)
  const [charallw, setcharallw] = useState(false)
  const [password, setpassword] = useState()

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallw)
    {
      str += "0123456789"
    }
    if(charallw){
      str += "~!@#$%^&*(){}?<>/"
    }
    for(let i = 1; i<=lenght; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  },[lenght,numberallw, charallw,setpassword])

useEffect(() => {
  passwordGenerator()
} , [lenght,numberallw, charallw,passwordGenerator])

const passwordRef= useRef(null)
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
 <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-2 my-8 text-orange-500 bg-gray-700 '>
   <h2 className='flex flex-wrap justify-center py-7'>Password Generator </h2>
<div  className="rounded-lg bg-white flex items-center justify-center overflow-hidden  mb-4"
>
   <input
  type="text"
  value={password}
  placeholder='Make Password'
  className='w-full outline-none'
style={{backgroundColor:'yellow', padding:2}}
  readOnly
  ref={passwordRef}
  />
   <button 
    onClick={copyPasswordToClipboard}
   className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div>
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
     <input 
     type="range"
     min={6}
     max={100}
     value={lenght}
     className='cursor-pointer'
     onChange={(e) => {setlenght(e.target.value)}}
     
     />
     <label >Length:{lenght}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberallw}
      id='numberInput'
      onChange={() => {setnumberallw((prev)=> !prev)}}
      />
      <label >Number</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={charallw}
      id='numberInput'
      onChange={() => {setcharallw((prev)=> !prev)}}
      />
      <label >Spacial Charachter</label>
    </div>
   </div>
 </div>
  )
}

export default App
