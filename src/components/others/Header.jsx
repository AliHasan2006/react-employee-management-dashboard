import React from 'react'

const Header = () => {
  return (
    <div className='text-white bg-[#121212] flex justify-between items-end'><h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>Ali Hasan 👋</span></h1>
    <button className='bg-red-500 hover:bg-red-400 out-none text-white px-5 py-2 rounded-sm text-lg font-medium cursor-pointer'>Log out</button></div>
  )
}

export default Header