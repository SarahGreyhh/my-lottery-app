import React from 'react'
import { useMetamask } from "@thirdweb-dev/react"

function Login() {
    const connectWithMetamask = useMetamask();

  return (
    <div className='bg-[#2563EB] min-h-screen flex flex-col
    items-center justify-center text-center '>
        <div className='flex flex-col items-center mb-10' >
            <img className='rounded-full h-56 wo-56 mb-10'
        src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" 
        alt=""
        />
        <h1 className='text-6xl text-white font-bold '> SARAH`S DRAW</h1>
        <h2 className='text-white' >Get Started By Logging in with your MetaMask </h2>
        <button onClick={connectWithMetamask} className='bg-white px-8 py5 mt-10 rounded-lg shadow-lg
         font-bold'>
         Login with Metamask 
         </button>
        </div>
    </div>
  )
}

export default Login