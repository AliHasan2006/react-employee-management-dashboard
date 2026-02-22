import React from 'react'

const AcceptTask = () => {
  return (
 <div className={`shrink-0 h-full w-75 bg-green-400 rounded-xl`}>
        <div className=" text-white p-5">
          <div className="flex justify-between items-center text-sm font-medium">
            <p className="bg-red-500 rounded-md text-sm py-2 px-4">High</p>
            <p>26/11/2026</p>
          </div>
          <h2 className="text-2xl font-medium mt-4">Make a youtube video</h2>
          <p className="text-gray-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            obcaecati.lorem5 Lorem ipsum dolor sit amet.
          </p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-base'>Marsk as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-base'>Marsk as Failed</button>
          </div>
        </div>
      </div>  
      )
}

export default AcceptTask