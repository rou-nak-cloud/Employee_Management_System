import React from 'react'
import DashboardHeader from '../OtherComponents/DashboardHeader'
import TaskStatus from '../OtherComponents/TaskStatus'
import TaskList from '../OtherComponents/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-15 w-screen h-screen'>
      <DashboardHeader data={data}/>
      <TaskStatus data={data} />
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
