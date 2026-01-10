import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Tasklist/TAskList'

const EmployeeDsahboard = () => {
  return (
    <div className='p-10 bg-[#121212] h-screen w-screen'>
      <Header />
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDsahboard