import React from 'react'

const AdminDashPanel = () => {
  return (
    <div>
      <div className='p-6 mt-15 bg-[#1c1c1c]'>
        <form className='flex flex-wrap w-full items-start justify-between p-10'>

         <div className='w-1/2'>
         <div>
            <h3 className='text-lg mb-0.5 text-gray-300'>Task Tittle:</h3>
            <input
            className='text-medium py-2 px-4 w-4/5 rounded outline-none border-emerald-700 border-b-2 border-l-2 border-r-2 mb-5' 
            type="text" placeholder='Enter the Task..' />
            </div>
            <div>
            <h3 className='text-lg mb-0.5 text-gray-400'>Date:</h3>
            <input
             className='text-medium py-2 px-4 w-4/5 rounded outline-none border-emerald-700 border-b-2 border-l-2 border-r-2 mb-5' 
             type="date" />
            </div>
            <div>
            <h3 className='text-lg mb-0.5 text-gray-300'>Assign To:</h3>
            <input
             className='text-medium py-2 px-4 w-4/5 rounded outline-none border-emerald-700 border-b-2 border-l-2 border-r-2 mb-5'  
            type="text" placeholder='employee name' />
            </div>
            <div>
            <h3 className='text-lg mb-0.5 text-gray-300'>Category:</h3>
            <input
             className='text-medium py-2 px-4 w-4/5 rounded outline-none border-emerald-700 border-b-2 border-l-2 border-r-2 mb-5'  
            type="text" placeholder='design, dev, graphics, editing etc.' />
            </div>
         </div>

           <div className='w-1/2'>
           <div className='w-4/5 flex items-start flex-col'>
            <h3 className='text-xl mb-0.5 text-gray-300'>Description:</h3>
            <textarea className='w-full h-44 text-medium rounded outline-none px-4 py-2 bg-transparent border-emerald-600 border-l-2 border-r-2 border-b-2' name="" id=""></textarea>
            </div>
            <button className='w-4/5 bg-emerald-800 hover:bg-emerald-900 mt-15 py-4 rounded-lg cursor-pointer tracking-widest text-2xl '>Create Task</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default AdminDashPanel
