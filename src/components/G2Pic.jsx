import React, { useState } from 'react'

function G2Pic() {

  const [linkCard, setLinkCard] = useState(false);

  return (
    // QUick Links GRID 2
    <>
      <div className={`overlay ${
        linkCard ? "fixed" : "hidden"
      }`}></div>

      <div className={`bg-white rounded-3xl h-[400px] w-1/3 z-30 top-1/2 left-1/2 -translate-1/2 p-4 ${
        linkCard ? "fixed" : "hidden"
      }`}>
          <div className='flex justify-between'>

              <i class="fi fi-rr-cross cursor-pointer" onClick={()=>setLinkCard(!linkCard)}>

              </i>

          </div>
      </div>

      <div className="quickCards grid-cols-4 grid-rows-3 relative">
          
          {/* Add Card UI */}

          <div className='qCards' onClick={()=> setLinkCard(true)} >
            <i class="fi fi-rr-plus"></i>
            ADD
          </div>


      </div>
    </>
  )
}

export default G2Pic