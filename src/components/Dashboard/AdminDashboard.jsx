import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen w-screen text-white bg-[#121212]'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard