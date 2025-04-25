import React, { useState } from 'react'

const LogInOut = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        handleLogin(email,password)
        setEmail=("")
        setPassword=("")
    }

  return (
    <div>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='border-1 p-10 w-xl h-125 border-emerald-800 rounded-xl shadow-emerald-800 shadow-lg'>
            <h1 className='text-center font-bold text-4xl mb-20 text-emerald-600'>LogIn <span className='text-emerald-900 '>Dashboard</span></h1>
            <form
            onSubmit={(e) => {
                submitHandler(e)
            }}
             className='flex  flex-col justify-center items-center gap-7'>
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className='w-full bg-transparent font-light border-emerald-600 border-b-2 rounded-3xl px-6 py-4 outline-none placeholder:text-gray-300'
                type="email" placeholder='Enter your Email' required />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                   className='w-full bg-transparent font-light border-emerald-600 border-t-2 rounded-3xl px-6 py-4 outline-none placeholder:text-gray-300'
                type="password" placeholder='Enter your Password' required />
                <button className='px-20 py-4 bg-emerald-800 shadow-lg shadow-emerald-800/80 rounded-full mt-12 text-xl text-center tracking-widest cursor-pointer hover:bg-emerald-900 font-semibold '>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LogInOut
