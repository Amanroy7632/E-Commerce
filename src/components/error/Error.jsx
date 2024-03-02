import React from 'react'
function Error({errorMessage}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 hover:scale-105 flex flex-col items-center dark:bg-gray-700">
      <img src="https://github.com/Amanroy7632/E-Commerce/blob/main/src/components/error/wifi.png?raw=true" className=' w-2/3' alt="Error png" />
        <h1 className="text-2xl font-semibold mb-4 text-red-600">{errorMessage.errorMessage}</h1>
        <p className="text-gray-700 mb-8 dark:text-white">You're offline. Check your connection.</p>
        <button onClick={()=>{
            window.location.reload();
        }} className=" w-1/2 bg-transparent hover:bg-gray-700 flex justify-center items-center text-blue-600 py-2 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-opacity-50 transition duration-300 ease-in-out">Retry</button>
      </div>
    </div>
  )
}

export default Error
