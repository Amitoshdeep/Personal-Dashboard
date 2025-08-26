import React, { useState, useEffect, useRef } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

function Navbar() {
  const [settings, setSettings] = useState(true);
  const [name, setName] = useLocalStorage("userName","");
  const boxRef = useRef(null);
  const [city, setCity] = useLocalStorage("city","");
  const [ytVid, setytVid ] = useLocalStorage("yt-play",""); 
  // GetName from local storage
  useEffect(()=>{
    const savedName = localStorage.getItem("userName");
    if(savedName){
      setName(savedName);
    }
  },[])

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name.trim() !== "") {
      localStorage.setItem("userName", name);
    }
  }, [name]);

  // EVENT
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSettings(true) // close box
    }
  }

  // Auto-focus the box when it opens
  useEffect(() => {
    if (!settings && boxRef.current) {
      boxRef.current.focus()
    }
  }, [settings])

  return (
    <div className='text-black relative z-20 py-2 flex justify-between w-full font-poppins'>
      <h1 className='text-xl px-3 py-1 border-2 w-fit rounded-3xl border-[#00000070]'>
        ダッシュボード
      </h1>

      <button
        className='flex items-center gap-2 bg-white px-3 py-2 rounded-3xl cursor-pointer'
        onClick={() => setSettings(!settings)}
      >
        <i className='fi fi-rr-settings flex items-center'></i>
        Setting
      </button>

      {/* Overlay */}
      <div
        className={`overlay ${
          settings ? 'hidden' : 'fixed'
        }`}
      ></div>

      {/* Box */}
      <div
        ref={boxRef}
        tabIndex={0} // 👈 focusable
        onKeyDown={handleKeyDown}
        className={`z-30 bg-white h-1/2 w-1/3 rounded-3xl left-1/2 top-1/2 translate-[-50%] px-6 py-3 flex flex-col ${
          settings ? 'hidden' : 'fixed'
        }`}
      >
        <div className='flex justify-between w-full'>
          <p className='font-semibold'>Setting</p>
          <i
            className='fi fi-rr-cross-small text-xl cursor-pointer'
            onClick={() => setSettings(true)}
          ></i>
        </div>

        <div className='py-2 w-full flex gap-3 flex-col'>
          
          <div className='flex items-center border-2 border-[#00000050] rounded-xl '>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name.."
              className="px-2 py-2 w-full outline-0"
            />

            <div className='px-3 py-2 bg-white rounded-xl font-bold'>
              <p>NAME</p>
            </div>

          </div>
          
          <div className='flex items-center border-2 border-[#00000050] rounded-xl '>

            <input 
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder= "Enter your City.."
              className= "px-2 py-2 w-full outline-0"
              />

            <div className='px-3 py-2 bg-white rounded-xl font-bold'>
              <p>City</p>
            </div>
          </div>
          
          <div className='flex items-center border-2 border-[#00000050] rounded-xl '>

            <input 
              type="text"
              value={ytVid}
              onChange={(e)=> setytVid(e.target.value)}
              placeholder= "Enter yt playlist ID"
              className= "px-2 py-2 w-full outline-0"
              />
            <div className='px-3 py-2 bg-white rounded-xl font-bold w-[100px]'>
              <p>Yt-Link</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar
