import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  return (
    <div className='w-full bg-[#1c1c1c] p-5 mt-4 '>
      <div className='bg-gray-700 text-center py-2 px-4 flex justify-between rounded-md mb-2 gap-4'>
        <h2 className='w-1/5 bg-red-800 rounded-sm px-4'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-800 rounded-sm px-4'>New Task</h3>
        <h4 className='w-1/5 bg-red-800 rounded-sm px-4'>Active Task</h4>
        <h4 className='w-1/5 bg-red-800 rounded-sm px-4'>Completed Task</h4>
        <h4 className='w-1/5 bg-red-800 rounded-sm px-4'>Failed Task</h4>
      </div>

    <div className='overflow-auto'>
    {authData.employees.map((elem,idx) => {
      return <div className='bg-transparent border-b-2  border-teal-800 py-2 px-4 flex justify-between rounded-md mb-2 gap-4'>
        <h2 className=' text-xl text-center w-1/5 text-gray-200 rounded-sm px-4'>{elem.firstName}</h2>
        <h3 className=' text-xl text-center w-1/5 text-blue-600 rounded-sm px-4'>{elem.taskCounts.newTask}</h3>
        <h4 className=' text-xl text-center w-1/5 text-yellow-600 rounded-sm px-4'>{elem.taskCounts.active}</h4>
        <h4 className=' text-xl text-center w-1/5 text-green-600 rounded-sm px-4'>{elem.taskCounts.completed}</h4>
        <h4 className=' text-xl text-center w-1/5 text-red-500 rounded-sm px-4'>{elem.taskCounts.failed}</h4>
      </div>
      })}
    </div>
    </div>
  )
}

export default AllTask
