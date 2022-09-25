import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";


function Loading() {
  return (
    <div className='bg-[#2563EB] h-screen flex flex-col items-center
    justify-center ' >
      <div>
        <img className='rounded-full h-20 w-20 ' src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt="" />
        <h1 className='text-lg text-white font-bold ' >Loading SARAH`S DRAW</h1>
      </div>
      <SyncLoader color='white' size={30}   />
    </div> 
  )
}

export default Loading