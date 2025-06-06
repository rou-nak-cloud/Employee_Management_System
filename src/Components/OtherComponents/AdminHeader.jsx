import React from 'react'

const AdminHeader = (changeUser) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser','')
        changeUser.changeUser('')
        // console.log(changeUser)
        // window.location.reload()
      }

  return (
    <div>
      <div className=' flex items-end justify-between'>
        <h2 className='text-2xl font-medium'>Hello <br /> <span className='text-emerald-700 font-semibold text-3xl'> Admin👋</span></h2>
        <button onClick={logOutUser} className='bg-red-600 font-medium text-white rounded-sm px-5 py-2 cursor-pointer hover:bg-red-800'>LogOut</button>
      </div>
    </div>
  )
}

export default AdminHeader
