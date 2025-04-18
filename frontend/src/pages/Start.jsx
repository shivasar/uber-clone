import React from 'react'
import { Link } from 'react-router'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-18 ml-8'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className ='text-3xl font-bold'>Get Started with Uber</h2>
      <Link to='/login' className='flex items-center justify-center w-full bg-black text-white text-2xl font-bold py-3 rounded mt-5'>Continue</Link>
        </div>
      
    </div>
  )
}

export default Start
