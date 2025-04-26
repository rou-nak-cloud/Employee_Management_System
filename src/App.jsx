import React, { useContext, useEffect, useState } from 'react'
import LogInOut from './Components/Authentication/LogInOut'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
// import { setLocalStorage } from './Utills/localStorage'
import { AuthContext } from './Context/AuthProvider'
import { getLocalStorage } from './Utills/localStorage'

const App = () => {

  // useEffect(() => {
  //   setLocalStorage() 
  // }, [])
  
const [user, setUser] = useState(null)
const [loggedInUser, setLoggedInUser] = useState(null)
const authData = useContext(AuthContext)
// console.log(authData)

useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser")
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUser(userData.data)
  }
}, [])




const handleLogin = (email,password) => {
  if (email == 'admin@me.com' && password == '123') {
    setUser('admin')
    // console.log('This is ADMIN')
    localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))
  } else if(authData){
    const employee = authData.employees.find((e) => email == e.email && password == e.password)
    if(employee){
      setUser('employee')
      setLoggedInUser(employee)
      // console.log('This is USER')
      localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data:employee}))
    }
  } else {
    alert('Invalid Credentials')
  }
}

  return (
   <>
    {/* <LogInOut /> */}
    {!user ? <LogInOut handleLogin={handleLogin} /> : ''}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUser} /> : null)}
   </>
  )
}

export default App
