import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 px-4 py-6'>
      <div className='text-center mb-8'> 
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>ClariGen{" "} </h1>
        <p className='text-lg text-gray-600 '>Upload your image and let AI do the MAGIC</p>
      </div>

      <Home/> 

      <div className='text-xl text-gray-400 text-sm'>
        <p>Powered by @ClariGenAI</p>
      </div>
    </div>
  )
}

export default App