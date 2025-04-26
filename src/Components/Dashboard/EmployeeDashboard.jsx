import React from 'react'
import DashboardHeader from '../OtherComponents/DashboardHeader'
import TaskStatus from '../OtherComponents/TaskStatus'
import TaskList from '../OtherComponents/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-15 w-screen h-screen'>
      <DashboardHeader changeUser={props.changeUser} data={props.data}/>
      <TaskStatus data={props.data} />
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
