import React from 'react'
import DashboardHeader from '../OtherComponents/DashboardHeader'
import AdminDashPanel from '../OtherComponents/AdminDashPanel'
import AllTask from '../OtherComponents/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-15 w-screen h-screen'>
      <DashboardHeader changeUser={props.changeUser}/>
        <AdminDashPanel />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
