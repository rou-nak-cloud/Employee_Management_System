import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-full w-[400px] bg-green-900 rounded-xl'>
        <div className='flex items-center justify-between'>
            <h3 className='text-sm bg-red-800 px-4 py-2 rounded-xl'>{data.category}</h3>
            <h4 className=''>{data.taskDate}</h4>
        </div>
        <h2 className='mt-6 text-2xl font-semibold text-red-400'>{data.taskTitle}</h2>
        <p className='text-xl p-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-3'>
            <button className='bg-emerald-700 py-2 px-4 text-medium rounded-2xl text-center'>Mark as complete</button>
            <button className='bg-red-700 py-2 px-4 text-medium rounded-2xl text-center'>Mark as failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
