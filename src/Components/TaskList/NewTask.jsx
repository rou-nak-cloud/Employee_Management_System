import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-full w-[400px] bg-green-800 rounded-xl'>
        <div className='flex items-center justify-between'>
            <h3 className='text-sm bg-red-800 px-4 py-2 rounded-xl'>{data.category}</h3>
            <h4 className=''>{data.taskDate}</h4>
        </div>
        <h2 className='mt-6 text-2xl font-semibold text-red-400'>{data.taskTitle}</h2>
        <p className='text-xl p-2'>{data.taskDescription}</p>
        <div className='mt-4'>
           <button className='bg-teal-700 rounded-2xl py-2 px-4 w-full'>Accepted Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
