import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-200">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) 
}

export default Loading