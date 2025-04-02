import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-xl rounded-2xl py-3 px-4 w-full max-w-md'>
        <label htmlFor="fileInput" className='block full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 text-center hover:border-blue-400 trasnition duration-300 ease-in-out'>
            <input type="file" id="fileInput"className='hidden' />
            <span className='text-md font-medium text-gray-500'>Upload your image here.</span>
        </label>
    </div>
  )
}

export default ImageUpload