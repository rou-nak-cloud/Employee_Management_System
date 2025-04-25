import React from 'react'

const TaskStatus = ({data}) => {
  return (
    <div className='flex  flex-wrap justify-between gap-4 '>
      <div className='w-[49%] p-10 bg-red-400 mt-3 rounded-2xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
        <h2 className='text-2xl font-medium'>New Task</h2>
      </div>
      <div className='w-[49%] p-10 bg-green-600 mt-3 rounded-2xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
        <h2 className='text-2xl font-medium'>Accepted</h2>
      </div>
      <div className='w-[49%] p-10 bg-orange-800 mt-3 rounded-2xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
        <h2 className='text-2xl font-medium'>Completed</h2>
      </div>
      <div className='w-[49%] p-10 bg-yellow-600 mt-3 rounded-2xl'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
        <h2 className='text-2xl font-medium'>Failed</h2>
      </div>
    </div>
  )
}

export default TaskStatus
