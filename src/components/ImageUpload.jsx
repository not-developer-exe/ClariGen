import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-xl rounded-2xl py-3 px-4 w-full max-w-md'>
        <label htmlFor="fileInput" className='block full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 text-center hover:border-blue-400 trasnition duration-300 ease-in-out'>
            <input type="file" id="fileInput"className='hidden' />
            <p>Upload your image here.</p>
        </label>
    </div>
  )
}

export default ImageUpload