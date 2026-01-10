import React from 'react'

function CreateTask() {
  return (
    <div className='mt-7 p-5 rounded bg-[#1c1c1c]'>
            <form className='flex flex-wrap w-full bg-[#1c1c1c] items-start justify-between'>
              <div className='w-1/2'>
                 <div className='mt-2'>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input type="text" placeholder='Make a UI design' className=' text-sm bg-transparent border-2 border-gray-500 py-1 px-2 mt-1 rounded-sm w-4/5'/>
               </div>
               <div className='mt-2'>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input type="date" className='text-sm bg-transparent border-2 border-gray-500 py-1 px-2 mt-1 rounded-sm w-4/5' />
               </div>
               <div className='mt-2'>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Assign TO</h3>
                <input type="text" placeholder='employee name' className='text-sm bg-transparent border-2 border-gray-500 py-1 px-2 mt-1 rounded-sm w-4/5'/>
               </div>
                <div className='mt-2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input type="text" placeholder='Ui design, Logo Design' className='text-sm bg-transparent border-2 border-gray-500 py-1 px-2 mt-1 rounded-sm w-4/5'/>
                </div>
              </div>
                <div className='w-1/2 flex flex-col'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea name="" id="" cols={30} rows={10} className='text-sm bg-transparent border-2 border-gray-500 py-1 px-2 mt-1 rounded-sm w-4/5'></textarea>
                <button className='w-4/5 cursor-pointer bg-green-400 hover:bg-green-500 text-gray-100 text-sm font-medium mt-2 py-2 rounded' type='submit'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask